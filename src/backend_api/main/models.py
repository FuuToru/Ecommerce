from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.db.models import Count
import datetime
# Vendor

class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='vendor_imgs/', null=True)
    address = models.TextField(null=True)
    
    def __str__(self):
        return self.user.username
    
    @property
    def show_chart_daily_order(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__date').annotate(count = Count('id'))
        dateList = []
        countList = []
        if orders:
            for order in orders:
                dateList.append(order['order__order_time__date'])
                countList.append(order['count'])
        return {'date':dateList, 'data':countList}
    
    @property
    def show_chart_monthly_order(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__month').annotate(count = Count('id'))
        dateList = []
        countList = []
        if orders:
            for order in orders:
                monthinterger = order['order__order_time__month']
                month = datetime.date(1900, monthinterger, 1).strftime('%B')
                dateList.append(month)
                countList.append(order['count'])
        return {'date':dateList, 'data':countList}
    
    @property
    def show_chart_yearly_order(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__year').annotate(count = Count('id'))
        dateList = []
        countList = []
        if orders:
            for order in orders:
                dateList.append(order['order__order_time__year'])
                countList.append(order['count'])
        return {'date':dateList, 'data':countList}

# Customer
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='customer_imgs/', null=True)
    def __str__(self):
        return self.user.username

class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="customer_addresses")
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address
    class Meta:
        verbose_name_plural = 'Customer Addresses'
    

#Product
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = 'Product Categories'


class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, null = False, related_name="category_products")
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, null = False)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    usd_price = models.DecimalField(max_digits=10, decimal_places=2, default = 80)
    tags = models.TextField(null=True)
    slug = models.SlugField(unique=True, blank=True)
    image = models.ImageField(upload_to='product_imgs/', null=True)
    demo_url = models.URLField(null=True, blank=True)
    product_file = models.FileField(upload_to='product_files/', null=True)
    downloads = models.IntegerField(default=0)
    published_status = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def tag_list(self):
        if self.tags:
            tagList = self.tags.split('.')
            return tagList


    def __str__(self):
        return self.title
    
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="rating_customers")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_ratings")
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'
    
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_imgs")
    image = models.ImageField(upload_to='product_imgs/', null=True)

    def __str__(self):
        return self.image.url


    
# Order
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name = 'customer_orders')
    order_time = models.DateTimeField(auto_now_add=True)
    order_status = models.BooleanField(default= False)
    total_amount = models.DecimalField(max_digits =10, decimal_places =2, default = 0)
    total_usd_amount = models.DecimalField(max_digits =10, decimal_places =2, default = 0)


    def __str__(self):
        return '%s' % (self.order_time)
    

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_items")
    qty = models.IntegerField(default = 1)
    price = models.DecimalField(max_digits =10, decimal_places=2, default=0)
    usd_price = models.DecimalField(max_digits =10, decimal_places=2, default=0)

    def __str__(self):
        return self.product.title
    

class Wishlist(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE)

    class Meta:
        verbose_name_plural = 'Wish List'
    def __str__(self):
        return f"{self.product.title} - {self.customer.user.first_name}"
