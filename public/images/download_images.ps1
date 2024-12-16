$images = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=2340&q=80"
    "room1.jpg" = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2340&q=80"
    "room2.jpg" = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2340&q=80"
    "room3.jpg" = "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2340&q=80"
    "restaurant.jpg" = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2340&q=80"
    "climbing.jpg" = "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=2340&q=80"
    "valley.jpg" = "https://images.unsplash.com/photo-1580139673510-33075aa2b4f0?auto=format&fit=crop&w=2340&q=80"
    "culture.jpg" = "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2340&q=80"
}

foreach ($image in $images.GetEnumerator()) {
    $outFile = Join-Path $PSScriptRoot $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outFile
    Write-Host "Downloaded $($image.Key)"
}
