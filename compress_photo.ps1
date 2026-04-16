Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Vedhant\OneDrive\Desktop\Mahakal\public\me.jpeg"
$dstPath = "c:\Users\Vedhant\OneDrive\Desktop\Mahakal\public\me_optimized.jpeg"

$img = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Original: $($img.Width)x$($img.Height)"

# Resize to 500px wide (good enough for a profile/owner photo)
$newWidth = 500
$ratio = $img.Height / $img.Width
$newHeight = [int]($newWidth * $ratio)

$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

# Save with 80% JPEG quality
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 80)
$bmp.Save($dstPath, $jpegCodec, $encoderParams)

$graphics.Dispose()
$bmp.Dispose()
$img.Dispose()

$newSize = (Get-Item $dstPath).Length
Write-Host "Optimized: ${newWidth}x${newHeight}, Size: $([math]::Round($newSize/1024))KB"
Write-Host "Done!"
