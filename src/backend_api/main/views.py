from django.shortcuts import render
from . import serializers
from rest_framework import generics, permissions, pagination,viewsets, status
from . import serializers
from . import models
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.db import transaction
# Create your views here.

# Vendor
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

class VendorDetail(generics.RetrieveAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

# Customer
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

class CustomerAddressViewSet(viewsets.ModelViewSet):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer


# Product
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:
            category=self.request.GET['category']
            category = models.ProductCategory.objects.get(id=category)
            qs = qs.filter(category=category)
        if 'fetch_limit' in self.request.GET:
            limit =int(self.request.GET['fetch_limit'])
            qs =qs[:limit]
        return qs

class addProduct(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        return super().post(request,*args, **kwargs)
    
class ProductImgsList(generics.ListCreateAPIView):
    queryset = models.ProductImage.objects.all()
    serializer_class = serializers.ProductImageSerializer


class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs=qs.filter(tags__icontains=tag)
        return qs  
    
class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs=qs.filter(category = product.category).exclude(id=product_id)
        return qs  
    
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer

class ProductRatingViewSet(viewsets.ModelViewSet):
    queryset = models.ProductRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer


class CategoryDetail(generics.RetrieveAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer


# Order 
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer

    def post(self, request, *args, **kwargs):
        print(request.POST)
        return super().post(request,*args, **kwargs)

class OrderItemList(generics.ListCreateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemSerializer

    def post(self, request, *args, **kwargs):
        print(request.POST)
        return super().post(request,*args, **kwargs)


class CustomerOrderItemList(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.CustomerOrderItemSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
        qs = qs.filter(order__customer__id=customer_id)
        return qs 

class OrderDetail(generics.ListAPIView):
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items

@csrf_exempt
def update_order_status(request, order_id):
    if request.method == 'POST':
        updateRes = models.Order.objects.filter(id=order_id).update(order_status=True)
        msg={
            'bool':False,
        }
        if updateRes:
            msg={
                'bool':True,
                }
    return JsonResponse(msg)


    
class WishList(generics.ListCreateAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishListSerializer

@csrf_exempt
def check_in_wishlist(request):
    msg={
            'bool': False
        }
    if request.method =='POST':
        product_id = request.POST.get('product')
        customer_id = request.POST.get('customer')
        checkWishlist = models.Wishlist.objects.filter(product__id=product_id, customer__id=customer_id).count()
        if checkWishlist >0:
            msg={
                'bool': True,
            }
    return JsonResponse(msg)

class CustomerWishItemList(generics.ListAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
        qs = qs.filter(customer__id=customer_id)
        return qs 
@csrf_exempt
def remove_from_wishlist(request):
    if request.method =='POST':
        wishlist_id = request.POST.get('wishlist_id')
        res = models.Wishlist.objects.filter(id=wishlist_id).delete()
        msg={
            'bool': False
        }
        if res:
            msg={
                'bool': True,
            }
    return JsonResponse(msg)

class CustomerAddressList(generics.ListCreateAPIView):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
        qs = qs.filter(customer__id=customer_id).order_by('id')
        return qs

@csrf_exempt
def mark_default_address(request,pk):
    if request.method == 'POST':
        address_id = request.POST.get('address_id')
        models.CustomerAddress.objects.all().update(default_address = False)
        res = models.CustomerAddress.objects.filter(id=address_id).update(default_address=True)
        msg={
            'bool': False
        }
        if res:
            msg={
                'bool': True,
            }
    return JsonResponse(msg)

@csrf_exempt
def customer_dashboard(request,pk):
    customer_id = pk
    totalAddress = models.CustomerAddress.objects.filter(customer__id=customer_id).count()
    totalOrder = models.Order.objects.filter(customer__id=customer_id).count()
    totalWishlist = models.Wishlist.objects.filter(customer__id=customer_id).count()
    msg = {
        'totalAddress': totalAddress,
        'totalOrder': totalOrder,
        'totalWishlist': totalWishlist,
    }
    return JsonResponse(msg)


@csrf_exempt
def vendor_register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        address = request.POST.get('address')
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not (first_name and last_name and email and mobile and address and username and password):
            return JsonResponse({'bool': False, 'msg': 'All fields are required.'}, status=400)

        with transaction.atomic():  
            try:
                user = User.objects.create_user(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    username=username,
                    password=password
                )
                vendor = models.Vendor.objects.create(
                    user=user, 
                    mobile=mobile,
                    address=address,
                )
                return JsonResponse({
                    'bool': True,
                    'user': user.id,
                    'vendor': vendor.id,
                    'msg': 'Thank you for registration. You can login now.'
                }, status=201)

            except IntegrityError as e:
                if 'username' in str(e):
                    return JsonResponse({'bool': False, 'msg': 'Username already exists.'}, status=409)
                elif 'mobile' in str(e):
                    return JsonResponse({'bool': False, 'msg': 'Mobile number already registered.'}, status=409)
                else:
                    return JsonResponse({'bool': False, 'msg': 'Database error.'}, status=500)
    else:
        return JsonResponse({'bool': False, 'msg': 'Invalid request method.'}, status=405)


@csrf_exempt
def customer_register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        username = request.POST.get('username')
        password = request.POST.get('password')
        with transaction.atomic():
            try:
                user = User.objects.create_user(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    username=username,
                    password=password,
                )
                
                user.save()
                customer = models.Customer.objects.create(
                    user=user,
                    mobile=mobile
                )
                return JsonResponse({
                    'bool': True,
                    'user': user.id,
                    'customer': customer.id,
                    'msg': 'Thank you for registration. You can login now.'
                }, status=201)
            except IntegrityError as e:
                if 'username' in str(e):
                    return JsonResponse({'bool': False, 'msg': 'Username already exists.'}, status=409)
                elif 'mobile' in str(e):
                    return JsonResponse({'bool': False, 'msg': 'Mobile number already registered.'}, status=409)
                else:
                    return JsonResponse({'bool': False, 'msg': 'Database error.'}, status=500)
    else:
        return JsonResponse({'bool': False, 'msg': 'Invalid request method.'}, status=405)


@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        msg = {
            'bool': True,
            'msg': user.username,
        }
    else:
        msg = {
            'bool': False,
            'msg': 'Invalid username or password.',
        }
    
    print(msg)
    return JsonResponse(msg)

@csrf_exempt
def vendor_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    
    if user:
        try:
            vendor = models.Vendor.objects.filter(user=user).first()            
            msg = {
                'bool': True,
                'user': user.username,
                'id': vendor.id,
                'address': vendor.address,
                'mobile': vendor.mobile,
                'profile_img': vendor.profile_img.url if vendor.profile_img else ''
            }
        except models.Vendor.DoesNotExist:
            msg = {
                'bool': False,
                'msg': 'Vendor not found for the authenticated user.',
            }
    else:
        msg = {
            'bool': False,
            'msg': 'Invalid username or password.',
        }
    
    print(msg)
    return JsonResponse(msg)