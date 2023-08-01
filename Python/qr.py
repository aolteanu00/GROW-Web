import qrcode
img = qrcode.make('https://eco-zarch.github.io/GROW-Web/#')
type(img)  # qrcode.image.pil.PilImage
img.save("qr.png")