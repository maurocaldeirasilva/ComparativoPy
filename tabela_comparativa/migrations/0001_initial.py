# Generated by Django 4.2.1 on 2023-06-09 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, verbose_name='Nome da Turma')),
                ('date', models.DateField(verbose_name='Data da Turma')),
            ],
        ),
    ]
