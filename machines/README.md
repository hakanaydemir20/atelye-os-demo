# Makine kartı görselleri

Gösterge panelindeki her makine kartının **arka planında**, makine tipine özel
görsel gösterilir (üstünde yazıların okunması için koyu bir perde olur).
Dosya yoksa kart görselsiz (normal) görünür.

## Arama sırası

`<tip>.mp4` → `<tip>.webp/.jpg/.png` → `genel.mp4` → `genel.webp/.jpg/.png`

- **Video** yalnızca makine **çalışırken** sessiz ve sürekli döngüde oynar;
  diğer durumlarda duran kare olarak görünür.
- Ayar/bakımda soluk, pasif/boştayken renksiz, arızada kırmızımsı görünür.

## Dosya adları (makine tipi → ad)

| Makine tipi    | Ad              | Örnek                             |
|----------------|-----------------|-----------------------------------|
| CNC Freze      | `cnc-freze`     | `cnc-freze.mp4`, `cnc-freze.webp` |
| CNC Torna      | `cnc-torna`     | `cnc-torna.mp4`                   |
| Kayar Otomat   | `kayar-otomat`  | `kayar-otomat.webp`               |
| Lazer Kesim    | `lazer-kesim`   |                                   |
| Plazma         | `plazma`        |                                   |
| Abkant         | `abkant`        |                                   |
| Kaynak         | `kaynak`        |                                   |
| Montaj         | `montaj`        |                                   |
| Manuel İşleme  | `manuel-isleme` |                                   |
| (yedek)        | `genel`         | `genel.mp4`, `genel.webp`         |

## Önerilen ayarlar

- Video: MP4 (H.264), sessiz, **4–8 sn**, pürüzsüz döngü, **640×360**, dosya başına **1 MB altı**
- Resim: WebP, 640×360, 100 KB civarı
- Ana konu kadrajın **sağ yarısında** olsun; sol taraf kart yazılarının altında solar
- Video sıkıştırma örneği:
  `ffmpeg -i girdi.mp4 -an -vf "scale=640:-2,fps=24" -c:v libx264 -crf 28 -preset slow -movflags +faststart cnc-freze.mp4`
