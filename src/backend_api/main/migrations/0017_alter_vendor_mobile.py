# Generated by Django 4.2.13 on 2024-05-19 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_alter_product_category_alter_product_vendor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='mobile',
            field=models.PositiveBigIntegerField(null=True, unique=True),
        ),
    ]