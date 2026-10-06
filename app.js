const defaults=[
 {brand:'Atelier Cologne',name:'Orange Sanguine',type:'unisex',price:350,notes:'Красный апельсин · Герань · Сандал',tone:'gold',image:'assets/orange-sanguine.png',description:'Сочный красный апельсин и горькая цитрусовая цедра открывают свежий, солнечный аромат. Цветочное сердце смягчает яркое начало, а сандал и амбра оставляют тёплый, мягкий шлейф.',pyramid:{top:'Красный апельсин, горький апельсин',heart:'Герань, жасмин',base:'Сандал, амбра, бобы тонка'},testPrices:true,volumePrices:{'1 мл':350,'3 мл':950,'5 мл':1500,'10 мл':2800,'15 мл':3900,'20 мл':5000,'30 мл':6900,'50 мл':10500,'100 мл':16900,'Тестер':13900}},
 {brand:'BYREDO',name:'Bal d’Afrique',type:'women',price:18900,notes:'Бергамот · Нероли · Ветивер',tone:'sand'},
 {brand:'Maison Margiela',name:'REPLICA Jazz Club',type:'men',price:8900,notes:'Ром · Табак · Ваниль',tone:'amber'},
 {brand:'Le Labo',name:'Santal 33',type:'unisex',price:24900,notes:'Кардамон · Сандал · Кедр',tone:'clay'},
 {brand:'Diptyque',name:'Philosykos',type:'unisex',price:15400,notes:'Инжир · Кокос · Древесина',tone:'green'},
 {brand:'Aesop',name:'Hwyl',type:'men',price:12600,notes:'Кипарис · Ладан · Ветивер',tone:'olive'},
 {brand:'Narciso Rodriguez',name:'For Her Musc Noir',type:'women',price:11200,notes:'Слива · Мускус · Замша',tone:'rose'},
 {brand:'Jo Malone',name:'Wood Sage & Sea Salt',type:'unisex',price:9800,notes:'Амброксан · Грейпфрут · Шалфей',tone:'blue'},
 {brand:'Kilian',name:'Angels’ Share',type:'unisex',price:33500,notes:'Коньяк · Корица · Бобы тонка',tone:'gold'}
];
let products=JSON.parse(localStorage.getItem('aura-products')||'null')||defaults,cart=[],filter='all',brandFilter='all';
const orangeIndex=products.findIndex(p=>p.brand?.toLowerCase()==='atelier cologne'&&p.name?.toLowerCase()==='orange sanguine');
if(orangeIndex===-1)products=[defaults[0],...products];
else products[orangeIndex]={...defaults[0],...products[orangeIndex],image:defaults[0].image,description:defaults[0].description,pyramid:defaults[0].pyramid,testPrices:true,volumePrices:defaults[0].volumePrices};
localStorage.setItem('aura-products',JSON.stringify(products));
const brands=`10 CORSO|1000 FLOWERS|12 PARFUMEURS|19-69|27 87 PERFUMES|50 CENT POWER|A LAB ON FIRE|ABACO|ABDUL SAMAD AL QURASHI|ABERCROMBIE & FITCH|ABSOLUMENT|ABSOLUMENT PARFUMEUR|ACCA KAPPA|ACCENDIS|ACQUA DELL|ACQUA DI|ACQUA DI BIELLA|ACQUA DI GENOVA|ACQUA DI MONACO|ACQUA DI PARMA|ACQUA DI PORTOFINO|Afnan Perfumes|Maison Crivelli Parfums|Floraïku Paris|Kilian Paris|Memo Paris|Hormone Paris|Mancera Paris|House of Creed|Lattafa Perfumes|HFC Paris|BADGLEY MISCHKA|BALDESSARINI|BALDININI|BALENCIAGA|BAMOTTE TENTAZIONE|BANANA REPUBLIC|BARNEYS NEW YORK|BATTISTONI|BAUG SONS FASHION|BEAUFORT LONDON|BEBE|BELLEGANCE PERFUMES|BELLONA|BEN SHERMAN|BENEFIT|C&C|CACHAREL|CADILLAC|CAESARS|CAFE-CAFE|CALE FRAGRANZE D'AUTORE|CALVIN KLEIN|CALYX PRESCRIPTIVES|CAMEL|CAMPOS|CANALI|CANDIE'S|CARDIO|CARINE ROITFELD|CARITA|D.K.N.Y.|D.S.& DURGA|D'ORSAY|DAMIEN BASH PARFUM|DANA|DANA BRITISH|DANIELLE|DARPHIN|DAVER VIP CLUB|DAVID|DAVID BECKHAM|DAVID YURMAN|DAVIDOFF|DE CHARIERES|DE LEON|E.COUDRAY|ED HARDY|EDDIE BAUER|EDEN|EFOLIA OUD DE ARABIA|EGO FACTO|EIGHT & BOB|EISENBERG|EL CHARRO|ELECTIMUSS|ELIE SAAB|ELIE TAHARI|ELITE MODEL|ELIZABETH & JAMES NIRVANA|ELIZABETH ARDEN|F.MILLOT|F1 PARFUMS|FABERGE|FACONNABLE|FAMILIA DEAL|FC BARCELONA|FCUK|FENDI|FERAUD|FERRARI|FIELE FRAGRANCES|FILA|FILIPPO SORCINELLI|FIORUCCI|FIUME|GABRIELA SABATINI|GABRIELLA|GAI MATTIOLO|GALIMARD|GALLIVANT|GANDINI|GANT|GAP|GAS|GENDARME|GENERALE PARFUMERIE|GENNY|GENTLEMEN'S TONIC JUNZI|GENYUM|GEOFFREY BEENE|HALLE BERRY|HALSTON|HANAE MORI|HARAJUKU LOVERS|HAUTE FRAGRANCE COMPANY|HAYARI PARFUMS|HAYAT LOUXOR|HEELEY|HELENA RUBINSTEIN|HELMUT|HENRY COTTONS|HERMES|HERMETICA|HERO SPORT|HERR VON EDEN|I PROFUMI DI D'ANNUNZIO|ICEBERG|IKKS|IL PROFVMO|ILLUMINUM|INES|INITIO|INTENSE CAFE|ISABELL|ISABELLA ROSSELLINI|ISADORA|ISSEY MIYAKE|IVANKA TRUMP|J.F.SCHWARZLOSE BERLIN ZEITGEIST|JACOMO|JACQUES BOGART|JACQUES ESTEREL|JACQUES FATH|Jacques Zolty|JADI XENON|JAGUAR|JAMES BOND|JARDIN DE PARFUMS|JASON WU|JASPER|JAY Z|JEAN ANTOINE|JEAN BATIST|KAJAL|KALOO BLUE|KANEBO|KANON|KAREN|KARINA H|KARL LAGERFELD|KATE MOSS|KATE SPADE|KATHY HILTON|KATY PERRY|KAVIAR GUACHE|KEIKO MECHERI|KEMI|KENJI TANAKA|L.T. PIVER|L'ARC|L'ARTISAN PARFUMEUR|L'OCCITANE|L'ORCHESTRE PARFUM|LA CRISTALLERIE|LA MAISON DE LA VANILLE|LA MANUFACTURE|LA MARTINA|LA MER|LA PARFUME GALLERIA|LA PERLA|LA PRAIRIE|LA SULTANE DE SABA|LABORATORIO OLFATTIVO|M.INT|M.MICALLEF|MAC LADY|MAD ET LEN|MADELEINE VIONNET|MADONNA|MAISON ALHAMBRA|MAISON CRIVELLI|MAISON FRANCIS KURKDJIAN|Maison Francis Kurkidjian|MAISON GABRIELLA CHIEFFO|MAISON LOUBOUTIN|MAISON MAISSA|MAISON MARTIN MARGIELA|NAFNAF|NANETTE LEPORE|NAOMI CAMPBELL|NAOMI GOODSIR|NARCISO RODRIGUEZ|NASO DI RAZA|NASOMATTO|NAUTICA|NAUTILUS|NAYASSIA|NAZARENO GABRIELLI|NEJMA|NEOTANTRIC|NEW BRAND|NEW YORK|O.J PERRIN|OCEAN PACIFIC|ODIN|OKKI OPUS|OLFACTIVE STUDIO|OLFATTOLOGY|OLIBERE PARFUMS|OLIVIER DURBANO|OMAR SHARIF|OMNIA PROFUMI|ONCE|ONYRICO ROSSA|ORENS PARFUMS|ORIGINAL PENGUIN|ORIZA L. LEGRAND|PACO RABANNE|PACOMA|PACOROCA|PAGLIERI 1876|PAL ZILERI|PALOMA PICASSO|PANCALDI PANCALDI|PANOUGE|PANOUGE ISABEY|PANOUGE PERLE|PANOUGE SANDSTORM|PANTHEON ROMA|PAOLA FERRI|PAOLO GIGLI|PAOLO PECORA|PARFUMS DE MARLY|PRADA|QUEEN LATIFAH|QUIKSILVER|RAHLA|RALLET|RALPH LAUREN|RAMON BEJAR|RAMON MOLVIZAR|RAMON MONEGAL|RAMPAGE|RANCE|RANIA J|RAPHAEL REPLIQUE|RASASI|RE PROFUMO|REEM|Regalien|REMINISCENCE|Roja Parfums|S.ISHIRA|S.OLIVER|SALLE PRIVEE|SALVADOR DALI|SALVATORE FERRAGAMO|SANTI BURGAS|SARA CONOR|SARAH JESSICA PARKER|SARANTIS|SCENT BAR|SCULPTURES OLFACTIVES (MAJDA BEKKALI)|SEAN JOHN|SELENA GOMEZ|SERGE DUMONTEN|SERGE LUTENS|TAN GIUDICELLI|TAULETO|TAYLOR|TED BAKER|TED LAPIDUS|TEO CABANEL|TEQUILA|TERESA HELBIG|TERRY DE GUNZBURG|THAMEEN|THE DIFFERENT COMPANY|THE EAGLE BY KHABIB|THE FRAGRANCE KITCHEN|THE GATE FRAGRANCES PARIS|THE HARMONIST|U.S. POLO|UER MI|ULRIC DE VARENS|UNIQUE PARFUM|UNIQUE\`E LUXURY|URBAN SCENTS|USHER|V CANTO|VALENTIN YUDASHKIN|VALENTINO|VALMONT|VAN CLEEF & ARPELS|VAN GILS|VANDERBILT|VENDARA AUDREY|VERA WANG|VERONIQUE GABAI|VERSACE|VERSAILLES|VERTIGO|VERTUS|VICINI LAND|VILHELM PARFUMERIE|WATERFORD|WEIL|WIDE SOCIETY|WOMEN' SECRET|WORTH DANS|WORTH JE REVIENS|WRANGLER|XERJOFF|XOXO|YACHT MAN|YLLOZURE|YOHJI YAMAMOTO|YSL|YVES DE SISTELLE|YVES ROCHER|YZY|ZADIG & VOLTAIRE|ZARAH|ZARKOPERFUME|ZEROMOLECOLE|ZHIRINOVSKY|Zielinski & Rozen|ZILLI|ZIPPO|ZIRH|ZLATAN IBRAHIMOVIC|ZOOLOGIST`.split('|');
const additionalBrands=['ORLOV PARIS','NISHANE','MONTALE','Mancera','LE LABO','LANCOME','KILIAN','HUGO BOSS','HOUSE OF SILLAGE','GUERLAIN','GUCCI','GIVENCHY','ESSENTIAL PARFUMS','CREED','CLIVE CHRISTIAN','CHANEL','CAROLINA HERRERA','BYREDO','BURBERRY','ARTEOLFATTO','ARMAF','AMOUAGE','TOM FORD','TIZIANA TERENZI','THOMAS KOSMALA',...defaults.map(p=>p.brand)];
additionalBrands.forEach(name=>{if(!brands.some(b=>b.toLowerCase()===name.toLowerCase()))brands.push(name)});
brands.sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base',numeric:true}));
const brandAliases={'Kilian Paris':'Kilian','MAISON MARTIN MARGIELA':'Maison Margiela','House of Creed':'CREED','Mancera Paris':'Mancera','BYREDO':'BYREDO','KILIAN':'Kilian','LE LABO':'Le Labo'};
const money=n=>n.toLocaleString('ru-RU')+' ₽'; const $=s=>document.querySelector(s);
function render(){let q=($('#search').value||'').toLowerCase(),selectedBrand=(brandAliases[brandFilter]||brandFilter).toLowerCase(),list=products.filter(p=>(filter==='all'||p.type===filter)&&(brandFilter==='all'||p.brand.toLowerCase()===selectedBrand)&&(`${p.brand} ${p.name} ${p.notes}`.toLowerCase().includes(q)));if($('#sort').value==='priceAsc')list.sort((a,b)=>a.price-b.price);if($('#sort').value==='priceDesc')list.sort((a,b)=>b.price-a.price);$('#resultCount').textContent=brandFilter==='all'?`${list.length} ароматов`:`${brandFilter} · ${list.length} ароматов`;
 $('#products').innerHTML=list.length?list.map(productCard).join(''):'<p class="empty">По вашему запросу ничего не найдено.</p>';
 document.querySelectorAll('.product').forEach(card=>{
  const index=+card.dataset.index;
  const product=products[index],panel=card.querySelector('.volume-panel');
  if(product.description)panel.insertAdjacentHTML('afterbegin',`<div class="fragrance-description"><p>${escapeHTML(product.description)}</p>${product.pyramid?`<dl><dt>Верхние ноты</dt><dd>${escapeHTML(product.pyramid.top)}</dd><dt>Сердце</dt><dd>${escapeHTML(product.pyramid.heart)}</dd><dt>База</dt><dd>${escapeHTML(product.pyramid.base)}</dd></dl>`:''}</div>`);
  if(product.testPrices)panel.insertAdjacentHTML('beforeend','<small class="test-prices">Тестовые цены — для проверки выбора объёма и корзины.</small>');
  card.ontoggle=()=>{if(card.open)openedProducts.add(index);else openedProducts.delete(index)};
  card.querySelectorAll('[data-volume]').forEach(button=>button.onclick=()=>{
   selections.set(index,button.dataset.volume);
   updateSelection(card,index);
  });
  card.querySelector('.add').onclick=()=>{
   const p=products[index],variant=selections.get(index),price=variantPrice(p,variant);
   if(price===null)return;
   const existing=cart.find(item=>item.productIndex===index&&item.variant===variant);
   if(existing)existing.quantity++;else cart.push({...p,productIndex:index,variant,volume:variant==='Тестер'?null:variant,price,quantity:1});
   renderCart();openDrawer();
  };
  updateSelection(card,index);
 });
}
const volumes=['1 мл','3 мл','5 мл','10 мл','15 мл','20 мл','30 мл','50 мл','100 мл','Тестер'];
const selections=new Map(),openedProducts=new Set();
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function variantPrice(p,volume){const value=p.volumePrices?.[volume];return typeof value==='number'&&Number.isFinite(value)&&value>0?value:null}
function productCard(p){
 const index=products.indexOf(p),prices=volumes.map(v=>variantPrice(p,v)).filter(v=>v!==null);
 const price=prices.length?'от '+money(Math.min(...prices)):Number.isFinite(p.price)?money(p.price):'Цена уточняется';
 return `<details class="product" data-index="${index}" ${openedProducts.has(index)?'open':''}><summary aria-label="${escapeHTML(p.brand+' '+p.name)} — выбрать объём"><div class="product-art ${escapeHTML(p.tone||'sand')}">${p.image?`<img class="product-photo" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy">`:`<span class="mini-bottle">${escapeHTML(p.brand[0])}</span>`}<span class="perfume-mist" aria-hidden="true"></span><small>${p.type==='unisex'?'UNISEX':p.type==='women'?'POUR FEMME':'POUR HOMME'}</small></div><div class="product-info"><p>${escapeHTML(p.brand)}</p><h3>${escapeHTML(p.name)}</h3><small>${escapeHTML(p.notes)}</small><div class="product-bottom"><strong>${price}</strong><span class="choose-hint">Выбрать объём</span></div></div></summary><div class="volume-panel"><p>Выберите объём</p><div class="volume-options" role="group" aria-label="Объём аромата">${volumes.filter(v=>v!=='Тестер'||variantPrice(p,v)!==null).map(v=>`<button type="button" data-volume="${v}" aria-pressed="false" ${variantPrice(p,v)===null?'disabled':''}>${v}</button>`).join('')}</div><p class="variant-price" aria-live="polite"></p><button type="button" class="add" hidden>Добавить в корзину</button></div></details>`;
}
function updateSelection(card,index){
 const variant=selections.get(index),price=variantPrice(products[index],variant);
 card.querySelectorAll('[data-volume]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.volume===variant)));
 card.querySelector('.variant-price').textContent=price!==null?money(price):volumes.some(v=>variantPrice(products[index],v)!==null)?'Выберите доступный объём':'Цены по объёмам пока не указаны';
 card.querySelector('.add').hidden=price===null;
}
const alphabet=['all','0-9',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ','А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
function renderBrands(){
 const root=$('#brandList');
 root.replaceChildren();
 alphabet.filter(letter=>letter!=='all').forEach((letter,index)=>{
  const group=document.createElement('section');
  group.className='brand-group';group.id=`brand-group-${index}`;
  const heading=document.createElement('h3');heading.className='brand-initial';
  const anchor=document.createElement('a');anchor.href=`#${group.id}`;anchor.textContent=letter;
  heading.append(anchor);
  const list=document.createElement('div');list.className='brand-names';
  const names=brands.filter(name=>letter==='0-9'?/^[0-9]/.test(name):name.toLocaleUpperCase('ru-RU').startsWith(letter));
  names.forEach(name=>{
   const button=document.createElement('button');button.type='button';button.className='brand-item';button.textContent=name;
   button.onclick=()=>{
    brandFilter=name;filter='all';$('#search').value='';
    document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('active',x.dataset.filter==='all'));
    document.querySelectorAll('.brand-item').forEach(x=>x.classList.remove('selected'));
    button.classList.add('selected');render();$('#catalog').scrollIntoView({behavior:'smooth'});
   };
   list.append(button);
  });
  if(!names.length){const empty=document.createElement('p');empty.className='brand-empty';empty.textContent='Бренды на эту букву пока не добавлены';list.append(empty)}
  group.append(heading,list);root.append(group);
 });
}
function renderCart(){const count=cart.reduce((sum,p)=>sum+p.quantity,0);$('#cartCount').textContent=count;$('#cartItemsCount').textContent=count?`(${count})`:'';$('#cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><div class="cart-thumb ${escapeHTML(p.tone||'sand')}">${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}">`:escapeHTML(p.brand[0])}</div><div><b>${escapeHTML(p.name)}</b><small>${escapeHTML(p.brand)}</small><small>${escapeHTML(p.variant)} · ${p.quantity} шт.</small></div><strong>${money(p.price*p.quantity)}</strong><button data-remove="${i}" aria-label="Удалить позицию">×</button></div>`).join(''):'<p class="empty">Корзина пока пуста.<br>Добавьте аромат, который понравился.</p>';$('#cartTotal').textContent=money(cart.reduce((s,p)=>s+p.price*p.quantity,0));document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.remove,1);renderCart()})}
function openDrawer(){$('#drawer').classList.add('open');$('#overlay').classList.add('show')}function closeDrawer(){$('#drawer').classList.remove('open');$('#overlay').classList.remove('show')}
document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render()});document.querySelectorAll('.brand-letter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.brand-letter').forEach(x=>x.classList.remove('active'));b.classList.add('active');brandFilter='all';document.querySelectorAll('.brand-item').forEach(x=>x.classList.remove('selected'));renderBrands(b.dataset.brandLetter||'all');render()});$('#search').oninput=render;$('#sort').onchange=render;$('#openCart').onclick=openDrawer;$('#closeCart').onclick=closeDrawer;$('#overlay').onclick=closeDrawer;$('#mobileMenu').onclick=()=>document.querySelector('.main-nav').classList.toggle('show');$('#checkout').onclick=()=>alert(cart.length?'Спасибо! Менеджер свяжется с вами для подтверждения заказа.':'Добавьте аромат в корзину.');$('#subscribe').onsubmit=e=>{e.preventDefault();alert('Спасибо! Вы подписаны на новости AURA.');e.target.reset()};renderBrands();render();renderCart();