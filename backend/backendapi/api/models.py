from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=100)
    date = models.TextField()
    artist = models.ForeignKey(Artist, related_name='albums', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, related_name='songs', on_delete=models.CASCADE)
    album = models.ForeignKey( Album, related_name='songs', on_delete=models.CASCADE)

    def __str__(self):
        return self.title