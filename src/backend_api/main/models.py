from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
# Vendor

class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='vendor_imgs/', null=True)
    address = models.TextField(null=True)
    
    def __str__(self):
        return self.user.username

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

#Product
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    def __str__(self):
        return self.title

class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null = True, related_name="category_products")
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null = True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    usd_price = models.DecimalField(max_digits=10, decimal_places=2, default = 80)
    tags = models.TextField(null=True)
    slug = models.SlugField(unique=True, blank=True)
    image = models.ImageField(upload_to='product_imgs/', null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def tag_list(self):
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
    

