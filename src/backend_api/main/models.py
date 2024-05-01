from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
# Vendor
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
    def __str__(self):
        return self.user.username

# Customer
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()
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
    price = models.FloatField(null=True)
    tags = models.TextField(null=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

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
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null = True, related_name="order_items")
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null = True)

    def __str__(self):
        return self.product.title
    

