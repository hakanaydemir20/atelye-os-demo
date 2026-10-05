# 3D Model dosyaları

Gösterge panelindeki **TEZGÂH · 3D** vitrini bu klasördeki modeli gösterir.

## Tezgâh modeli ekleme

CNC freze tezgâhının 3D dosyasını buraya şu adla koyun:

```
public/models/cnc-freze.glb
```

- **Önerilen format: GLB** (.glb). Hafif, web standardı; hareketli parçalar ayrı
  **isimli** node'lar olursa (ör. `spindle`, `x_ekseni`) animasyon daha zengin olur.
  Blender/Fusion/SketchUp'tan "glTF Binary (.glb)" olarak dışa aktarın.
- **STL** (.stl) de desteklenir (tek parça, renksiz) — yalnızca turntable döner.
- Model yoksa panelde bu bölüm (demo'da) hiç görünmez; kendi uygulamanızda
  nazik bir "model ekleyin" notu çıkar.

## Davranış

- Boştayken kendi döner (turntable); GLB içinde gömülü animasyon varsa oynatılır.
- Kullanıcı fare/dokunuşla döndürüp yakınlaştırabilir; bırakınca ~2,5 sn sonra
  otomatik dönüş sürer.

## Farklı ad/yol

`src/features/dashboard/index.tsx` içinde `<MachineShowcase src="models/baska.glb" />`
şeklinde yol verebilirsiniz.

> İpucu: Dosya boyutunu küçük tutun (yüksek poligonlu cıvata/dişli detayları gerekmez).
> Çok büyük GLB'ler tarayıcıda yavaş yüklenir.
