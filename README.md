# hafta1-odev1

<strong>1-) Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.</strong>

Örnek 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Çünkü nums[0] + nums[1] == 9,  return [0, 1].

Örnek 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Örnek 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Cevap 1:
 1.for = 0.009033203125 ms
 2.forEach = 0.0458984375 ms
 3.while = 0.005126953125 ms
 4.do-while = 0.00390625 ms
 5.map = 0.043212890625 ms
 6.for of = 0.023193359375 ms
 7.for in = 0.010986328125 ms

 <strong>Hızlı->Yavaş
 do-while > while > for > for-in > for-of  > map > forEach</strong>

Yorum: Döngülerin fonksiyonlara göre daha hızlı execute edildiğini gözlemledim.Döngülerden sonra ES6 ile gelen for-of methodları ve ardından map ve forEach fonksiyonları geliyor.Her çalıştırmada doğal olarak exetuce süreleri değişse de sıralama geneli yani döngülerin hızlı fonksiyonların yavaşlığı değişmiyor.