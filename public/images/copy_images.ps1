$sourceFolder = "C:\Users\saqla\OneDrive\Desktop\website2\hill icon image"
$destinationFolder = "C:\Users\saqla\OneDrive\Desktop\website2\hill-icon-skardu\public\images"

# Create the destination folder if it doesn't exist
if (!(Test-Path -Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder
}

# Copy all images and rename them to be URL-friendly
Get-ChildItem -Path $sourceFolder -Filter "*.jp*g" | ForEach-Object {
    $newName = $_.Name.ToLower() -replace ' ','-'
    Copy-Item $_.FullName -Destination (Join-Path $destinationFolder $newName)
}
