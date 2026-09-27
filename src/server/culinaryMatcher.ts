/**
 * High-Precision Ingredient & Culinary Photo Matcher for LAGUNA DUBAI
 * Provides verified, high-definition, restaurant-grade food & beverage photography
 * matched precisely to the ingredients, toppings, and plating of each dish.
 */

export interface CulinaryMatchResult {
  title: string;
  matchedIngredients: string[];
  photos: string[];
}

// Rich taxonomy of authentic, photorealistic food & drink images categorized by precise ingredients
export const INGREDIENT_PHOTO_CATALOG: Array<{
  keywords: string[];
  ingredients: string[];
  photos: string[];
}> = [
  // --- PIZZAS BY TOPPINGS & INGREDIENTS ---
  {
    keywords: ['مارجريتا', 'margherita', 'طماطم وريحان', 'جبنة موزاريلا'],
    ingredients: ['موزاريلا طبيعي', 'صوص طماطم نابولي', 'أوراق ريحان طازجة', 'زيت زيتون بكر'],
    photos: [
      'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['بيبروني', 'pepperoni', 'سلامي', 'سجق مدخن'],
    ingredients: ['شرائح بيبروني مدخن', 'جبن موزاريلا ذائب', 'صوص طماطم إيطالي'],
    photos: [
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['فراخ باربكيو', 'bbq chicken', 'بيتزا فراخ', 'دجاج باربيكيو', 'بصل أحمر'],
    ingredients: ['قطع دجاج مشوي', 'صوص باربيكيو مدخن', 'بصل أحمر مكرمل', 'جبن موزاريلا'],
    photos: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['أربع أجبان', 'جبن', 'four cheese', 'quattro formaggi', 'شيدر', 'ريكوتا', 'بارميزان'],
    ingredients: ['موتزاريلا', 'جبنة ريكوتا', 'جورجونزولا', 'بارميزان معتق'],
    photos: [
      'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['بيتزا سجق', 'سجق بلدي', 'سوسيس', 'sausage pizza'],
    ingredients: ['سجق شرقي متبل', 'فلفل ألوان', 'زيتون كلاماتا', 'موتزاريلا'],
    photos: [
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['بيتزا خضار', 'خضروات', 'مشروم', 'فلفل رومي', 'veggie pizza', 'vegetable pizza'],
    ingredients: ['مشروم فريش', 'فلفل ألوان مقرمش', 'زيتون أسود', 'بصل', 'طماطم كرزية'],
    photos: [
      'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['سي فود بيتزا', 'جمبري بيتزا', 'seafood pizza', 'ثروات بحرية'],
    ingredients: ['جمبري متبل', 'كاليماري', 'صوص أبيض بالثوم', 'موتزاريلا'],
    photos: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- BURGERS BY PATTY & INGREDIENTS ---
  {
    keywords: ['برجر كلاسيك', 'بيف برجر', 'classic burger', 'تشيز برجر', 'لحم بقري'],
    ingredients: ['قطعة لحم بقري أنجوس مشوية', 'جبن شيدر ذائب', 'خس مقرمش', 'طماطم وبصل', 'صوص خاص'],
    photos: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['سماش برجر', 'دبل سماش', 'smash burger', 'double burger', 'بيكون'],
    ingredients: ['قطعتين لحم رقيقة مكرملة الحواف', 'طبقات جبن شيدر أمريكي', 'صوص لاجونا السري'],
    photos: [
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['برجر فراخ', 'تشيكن برجر', 'زنجر', 'chicken burger', 'crispy chicken'],
    ingredients: ['صدر دجاج مقرمش ذهبي', 'صوص الرانش الكريمي', 'كول سلو', 'مخلل خيار حلو'],
    photos: [
      'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['مشروم برجر', 'برجر فطر', 'سويس برجر', 'mushroom burger'],
    ingredients: ['مشروم طازج سوتيه بالزبدة', 'جبن سويسري ذائب', 'بصل مكرمل'],
    photos: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- CREPES & WAFFLES BY TOPPINGS ---
  {
    keywords: ['كريب نوتيلا', 'شيكولاتة نوتيلا', 'nutella crepe', 'موز وفراولة'],
    ingredients: ['شوكولاتة نوتيلا غنية', 'شرائح موز طازجة', 'قطع فراولة', 'سكر بودرة ناعم'],
    photos: [
      'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620921575116-b8a927d3b0c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['لوتس', 'بسكويت لوتس', 'كراميل', 'lotus crepe', 'lotus waffle'],
    ingredients: ['زبدة لوتس سائلة', 'بسكويت لوتس مجروش ومقرمش', 'آيس كريم فانيليا'],
    photos: [
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['كريب حادق', 'كريب فراخ', 'كريب زنجر', 'كريب بانيه', 'سافوري كريب'],
    ingredients: ['قطع دجاج مقرمشة', 'جبنة موزاريلا وشيدر', 'زيتون', 'مايونيز وكاتشب'],
    photos: [
      'https://images.unsplash.com/photo-1620921575116-b8a927d3b0c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['وافل بلجيكي', 'وافل شيكولاتة', 'waffle', 'بلجيكي'],
    ingredients: ['وافل بلجيكي ذهبي مقرمش', 'شوكولاتة بلجيكية داكنة', 'فواكه مشكلة'],
    photos: [
      'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- PASTAS BY SAUCE & INGREDIENTS ---
  {
    keywords: ['ألفريدو', 'فوتوتشيني', 'دجاج ومشروم', 'وايت صوص', 'alfredo', 'fettuccine'],
    ingredients: ['مكرونة فوتوتشيني إيطالية', 'كريمة طهي غنية بالزبدة', 'قطع صدور دجاج مشوية', 'مشروم طازج', 'بارميزان'],
    photos: [
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['أرابيانا', 'بيني حارة', 'صلصة حمراء', 'arrabbiata', 'رد صوص'],
    ingredients: ['مكرونة بيني', 'صلصة طماطم حارة بالثوم وزيت الزيتون', 'رقائق فلفل حار', 'ريحان'],
    photos: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['بولونيز', 'لحم مفروم', 'سباجيتي', 'bolognese'],
    ingredients: ['سباجيتي إيطالية رفيعة', 'صلصة راجو باللحم البقري المفروم', 'طماطم وبصل وجزر', 'جبن بارميزان'],
    photos: [
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- MOJITOS & SPECIALTY DRINKS ---
  {
    keywords: ['موهيتو فراولة', 'strawberry mojito', 'فراولة ونعناع'],
    ingredients: ['حبات فراولة طازجة مهروسة', 'أوراق نعناع بلدي', 'شرائح ليمون لايم', 'ثلج مجروش', 'صودا منعشة'],
    photos: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['موهيتو كلاسيك', 'ليمون ونعناع', 'classic mojito', 'صودا ليمون'],
    ingredients: ['عصير ليمون أخضر طازج', 'أوراق نعناع عطرية', 'سكر قصب طبيعي', 'مياه فوارة'],
    photos: [
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['باشن فروت', 'passion fruit', 'فاكهة العاطفة', 'موهيتو استوائي'],
    ingredients: ['لب باشن فروت طبيعي مع البذور', 'عصير ليمون', 'صودا مثلجة', 'نعناع طازج'],
    photos: [
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['بلو لاجون', 'بلو هاواي', 'blue curacao', 'عصير أزرق'],
    ingredients: ['سيرب بلو كوراساو أزرق', 'ليمون وسفن أب', 'ثلج نقي متبلور', 'شريحة برتقال'],
    photos: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- FRESH JUICES ---
  {
    keywords: ['مانجو', 'mango juice', 'مانجو فريش', 'عصير مانجو'],
    ingredients: ['لب مانجو طبيعي ١٠٠٪ بيور', 'قطع مانجو مكعبات', 'ثلج'],
    photos: [
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['برتقال فريش', 'orange juice', 'عصير برتقال'],
    ingredients: ['برتقال معصور طازج بدون ماء مضاف', 'شرائح برتقال للزينة'],
    photos: [
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['أفوكادو', 'عسل ومكسرات', 'avocado smoothie'],
    ingredients: ['أفوكادو كريمي طازج', 'حليب كامل الدسم', 'عسل نحل جبلي', 'كاجو ولوز وبندق'],
    photos: [
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- SPECIALTY COFFEE & HOT DRINKS ---
  {
    keywords: ['لاتيه', 'كابتشينو', 'latte', 'cappuccino', 'فلات وايت'],
    ingredients: ['جرعة اسبريسو مزدوجة أرابيكا', 'حليب مبخر مخملي مع رسمة لاتيه آرت فنية'],
    photos: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['اسبريسو', 'قهوة سنجل', 'espresso', 'دبل اسبريسو'],
    ingredients: ['خلاصة بن أرابيكا أصيل', 'طبقة كريما ذهبية بندقية كثيفة'],
    photos: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['سبانش لاتيه', 'ايس لاتيه', 'spanish latte', 'iced latte', 'كراميل'],
    ingredients: ['حليب مكثف محلى', 'اسبريسو مثلج بطبقات منفصلة', 'حليب بارد', 'مكعبات ثلج كريستالية'],
    photos: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['ماتشا', 'matcha latte', 'شاي أخضر ياباني'],
    ingredients: ['بودرة ماتشا يابانية عضوية من الدرجة الاحتفالية', 'حليب شوفان أو حليب لوز مبخر'],
    photos: [
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- DESSERTS ---
  {
    keywords: ['مولتن كيك', 'بركان شوكولاتة', 'lava cake', 'molten cake', 'شوكليت فودج'],
    ingredients: ['كيك شوكولاتة ساخن بقلب شوكولاتة سائلة تتدفق', 'بولة آيس كريم فانيليا', 'سكر بودرة'],
    photos: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['تشيز كيك', 'سان سباستيان', 'cheesecake', 'توت أزرق'],
    ingredients: ['جبن كريمي نيويورك مخبوز', 'قاعدة بسكويت زبدية مطحونة', 'صوص توت بري أزرق'],
    photos: [
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // --- SEAFOOD & GRILLS ---
  {
    keywords: ['جمبري', 'سي فود', 'روبيان', 'shrimp', 'seafood'],
    ingredients: ['جمبري جامبو مشوي بالزبدة والثوم والأعشاب', 'ليمون وأرز بسمتي أصفر'],
    photos: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    keywords: ['ستيك', 'لحم مشوي', 'ريب آي', 'steak', 'مشويات'],
    ingredients: ['قطعة لحم ستيك ريب آي تندرلوين مشوية ميديوم ويل', 'زبدة بالأعشاب والروزماري', 'بطاطس ودجز'],
    photos: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

/**
 * Match a dish title and ingredients against our verified culinary catalog.
 * Scores matches based on keyword presence in title and ingredients.
 */
export function matchCulinaryPhotos(
  dishName: string,
  ingredientsText = ''
): { photos: string[]; matchedIngredients: string[]; categoryTitle: string } {
  const cleanTitle = dishName.toLowerCase().trim();
  const cleanIngredients = ingredientsText.toLowerCase().trim();
  const fullText = `${cleanTitle} ${cleanIngredients}`;

  let bestMatch = INGREDIENT_PHOTO_CATALOG[0];
  let highestScore = -1;

  for (const entry of INGREDIENT_PHOTO_CATALOG) {
    let score = 0;

    // 1. Specific Title keyword matches (highest priority)
    for (const kw of entry.keywords) {
      const kwLower = kw.toLowerCase();
      if (cleanTitle.includes(kwLower)) {
        score += 30; // High priority for explicit dish name (e.g. "بيبروني", "لوتس", "نوتيلا")
      } else if (cleanIngredients.includes(kwLower)) {
        score += 12;
      }
    }

    // 2. Ingredients matches
    for (const ing of entry.ingredients) {
      const ingWords = ing.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
      for (const word of ingWords) {
        if (cleanIngredients.includes(word)) {
          score += 6;
        } else if (fullText.includes(word)) {
          score += 3;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  return {
    photos: bestMatch.photos,
    matchedIngredients: bestMatch.ingredients,
    categoryTitle: bestMatch.keywords[0],
  };
}
