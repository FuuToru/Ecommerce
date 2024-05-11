from django.shortcuts import render
from . import serializers
from rest_framework import generics, permissions, pagination,viewsets
from . import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
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

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password=request.POST.get('password')
    user=authenticate(username=username,password=password)
    if user:
        customer = models.Customer.objects.get(user=user)
        msg={
            'bool':True,
            'user':user.username,
            'id':customer.id,
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid Username/Password!!'
        }
    return JsonResponse(msg)

@csrf_exempt
def customer_register(request):
    first_name=request.POST.get('first_name')
    last_name=request.POST.get('last_name')
    email=request.POST.get('email')
    mobile=request.POST.get('mobile')
    username = request.POST.get('username')
    password=request.POST.get('password')
    try:
        user=User.objects.create(
            first_name = first_name,
            last_name = last_name,
            email=email,
            username=username,
            password=password,
        )
        if user:
            try:
                customer = models.Customer.objects.create(
                    user=user,
                    mobile=mobile
                )
                msg={
                    'bool':True,
                    'user':user.id,
                    'customer':customer.id,
                    'msg':'Thank you for your registration. You can login now'
                }
            except IntegrityError:
                    msg={
                        'bool':False,
                        'msg':'Mobile already exist!!'
                    }

        else:
            msg={
                'bool':False,
                'msg':'Oops...Something went wrong!!'
            }
    except IntegrityError:
        msg={
            'bool':False,
            'msg':'Username already exist!!'
        }

    return JsonResponse(msg)


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
    if request.method =='POST':
        product_id = request.POST.get('product')
        customer_id = request.POST.get('customer')
        checkWishlist = models.Wishlist.objects.filter(product__id=product_id, customer__id=customer_id).count()
        msg={
            'bool': False
        }
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