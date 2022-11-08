# Mancini Avocat

A basic one-page website for a lawyer. The site present the customer's service offer, contact informations, and prices.

## TODO

SVG : check all svg file size to decide between inline svg or separate svg file

### Strategy
-Small number of SVG(s) with < 5k file size each–inline them in HTML. Compressed gzip/brotli each will be around 1k. Any small number multiplied by 1k is better than same number of additional requests, no matter cached or not.

-Huge number of small SVG(s) < 5k - Make SVG sprite

-Any number of big SVG(s) > 5k and let's say we do not need to access SVG properties via CSS or JS. Then `<img src="name.svg">`

-Any number of SVG(s), but we do need to use CSS to change a SVG property or lets say animate some SVG property. The only viable option is inline svg.

-If we need SVG(s) for backgrounds but they are < than 5k each:
    .bg { background: url('data:image/svg+xml;utf8,<svg ...> ... </svg>'); }

-If we need SVG(s) for backgrounds but they are > than 5k each:
    .bg { background: url('images/file.svg'); }

## Known bug

    - On small sizes, the scrollspy doesn't react properly causing overlap of the navbar text and the hero text