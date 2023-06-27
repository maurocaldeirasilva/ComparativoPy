# Generated by Django 4.2.2 on 2023-06-26 18:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('rede', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Geral',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alarme', models.CharField(max_length=100, verbose_name='Alarme')),
                ('temperatura', models.CharField(max_length=100, verbose_name='Temperatura')),
                ('ambiente_instalação', models.CharField(max_length=100, verbose_name='Ambiente de Instalação')),
                ('grau_proteção', models.CharField(max_length=100, verbose_name='Grau de Proteção')),
                ('arma_cartao_sd', models.CharField(max_length=100, verbose_name='Armazenamento Cartão SD')),
            ],
        ),
        migrations.CreateModel(
            name='Imagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('compressao', models.CharField(max_length=100, verbose_name='Compressão')),
                ('resolucao', models.CharField(max_length=100, verbose_name='Resolução')),
                ('taxa_fps', models.CharField(max_length=100, verbose_name='Taxa de FPS')),
                ('comp_luz_fundo', models.CharField(max_length=100, verbose_name='Compensação de Luz de Fundo')),
                ('dori', models.CharField(max_length=100, verbose_name='DORI')),
                ('ivs', models.CharField(max_length=100, verbose_name='IVS')),
                ('starlight', models.CharField(max_length=100, verbose_name='Starlight')),
                ('sensor', models.CharField(max_length=100, verbose_name='Sensor')),
                ('ang_visao', models.CharField(max_length=100, verbose_name='Angulo de Visão')),
            ],
        ),
        migrations.CreateModel(
            name='Camera',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Imagem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='camera.imagem', verbose_name='Imagem')),
                ('geral', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='camera.geral', verbose_name='Geral')),
                ('rede', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rede.rede', verbose_name='Rede')),
            ],
        ),
    ]