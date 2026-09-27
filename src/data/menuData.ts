export type Language = 'ar' | 'en';

export interface PriceOption {
  label_en: string;
  label_ar: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name_en: string;
  name_ar: string;
  desc_en?: string;
  desc_ar?: string;
  price?: number;
  prices?: PriceOption[];
  isLagunaSpecial?: boolean;
  isAvailable?: boolean;
  image: string;
}

export interface SubCategory {
  id: string;
  name_en: string;
  name_ar: string;
  desc_en?: string;
  desc_ar?: string;
  items: MenuItem[];
}

export interface MainSection {
  id: 'food' | 'drinks';
  name_en: string;
  name_ar: string;
  subcategories: SubCategory[];
}

export const RESTAURANT_INFO = {
  name_en: "LAGUNA DUBAI",
  name_ar: "لاجونا دبي",
  subtitle_en: "Restaurant & Café",
  subtitle_ar: "مطعم وكافيه",
  tagline_en: "Good Drinks, Better Moments",
  tagline_ar: "مشروبات مميزة، لحظات تدوم",
  location_en: "Under Zefta Bridge, Mit Ghamr - Dakahlia",
  location_ar: "أسفل كوبري زفتى، ميت غمر - الدقهلية",
  currency_en: "EGP",
  currency_ar: "ج.م",
  welcome_en: "Welcome to Laguna Dubai. Indulge in artisanal culinary creations and handcrafted beverages overlooking our tranquil waterfront terrace.",
  welcome_ar: "أهلاً بكم في لاجونا دبي. استمتعوا بأشهى المأكولات والمشروبات المميزة في أجواء راقية على ضفاف النيل."
};

export const MENU_DATA: MainSection[] = [
  {
    "id": "food",
    "name_en": "FOOD",
    "name_ar": "الأكل",
    "subcategories": [
      {
        "id": "crepes",
        "name_en": "Crepes",
        "name_ar": "الكريبات",
        "desc_en": "Crispy savory and sweet French crepes loaded with premium fillings",
        "desc_ar": "كريبات رول ومثلثات مقرمشة محشوة بأجود أنواع الدجاج واللحوم والأجبان",
        "items": [
          {
            "id": "crepe-strips",
            "name_en": "Crispy Chicken Strips Crepe",
            "name_ar": "كريب استربس",
            "desc_en": "Crispy chicken strips, melted cheese, special sauce",
            "desc_ar": "دجاج استربس مقرمش - جبنة",
            "price": 180,
            "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-pane",
            "name_en": "Chicken Pane Crepe",
            "name_ar": "كريب بانيه",
            "desc_en": "Golden chicken pane, melted cheese, special sauce",
            "desc_ar": "دجاج بانيه - جبنة",
            "price": 160,
            "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-cordon-bleu",
            "name_en": "Cordon Bleu Crepe",
            "name_ar": "كريب كوردن بلو",
            "desc_en": "Chicken cordon bleu, smoked turkey, melted cheese",
            "desc_ar": "دجاج كوردن بلو - جبنة",
            "price": 200,
            "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-super-crunchy",
            "name_en": "Super Crunchy Chicken Crepe",
            "name_ar": "كريب سوبر كرانشي",
            "desc_en": "Extra crunchy fried chicken, melted cheese, signature drizzle",
            "desc_ar": "دجاج كرانشي إكسترا - جبنة",
            "price": 190,
            "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-shish-tawook",
            "name_en": "Grilled Shish Tawook Crepe",
            "name_ar": "كريب شيش طاووق",
            "desc_en": "Charcoal grilled shish tawook, melted cheese, garlic herbs",
            "desc_ar": "شيش طاووق مشوي - جبنة",
            "price": 180,
            "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-chicken-fajita",
            "name_en": "Chicken Fajita Crepe",
            "name_ar": "كريب فاهيتا دجاج",
            "desc_en": "Sautéed chicken fajita, colorful bell peppers, melted cheese",
            "desc_ar": "دجاج - فلفل ألوان - جبنة",
            "price": 180,
            "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-mix-chicken",
            "name_en": "Mix Chicken Crepe",
            "name_ar": "كريب ميكس دجاج",
            "desc_en": "Combination of crispy strips, pane and shish tawook, melted cheese",
            "desc_ar": "ميكس دجاج - جبنة",
            "price": 200,
            "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-zinger",
            "name_en": "Spicy Zinger Crepe",
            "name_ar": "كريب زنجر",
            "desc_en": "Spicy crispy chicken zinger, melted cheese, fiery touch",
            "desc_ar": "دجاج زنجر حار - جبنة",
            "price": 170,
            "image": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-choco-lotus-fruit",
            "name_en": "Chocolate / Lotus & Fruits Crepe",
            "name_ar": "كريب شوكولاتة أو لوتس وفواكه",
            "desc_en": "Warm crepe drizzled with rich chocolate or Lotus spread with fresh seasonal fruits",
            "desc_ar": "شوكولاتة أو لوتس مع فواكه طازة",
            "price": 120,
            "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-mozzarella",
            "name_en": "Melted Mozzarella Crepe",
            "name_ar": "كريب موتزاريلا",
            "desc_en": "Stretchy premium molten mozzarella cheese",
            "desc_ar": "جبنة موتزاريلا مذابة",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-mix-cheese",
            "name_en": "Mix Cheese Crepe",
            "name_ar": "كريب ميكس جبن",
            "desc_en": "Triple cheese blend of mozzarella, aged roumi and cheddar",
            "desc_ar": "موتزاريلا - رومي - شيدر",
            "price": 145,
            "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-roumi",
            "name_en": "Roumi Cheese Crepe",
            "name_ar": "كريب جبنة رومي",
            "desc_en": "Melted aged Egyptian roumi cheese with rich savory flavor",
            "desc_ar": "جبنة رومي مذابة",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-baladi-meat",
            "name_en": "Baladi Fresh Meat Crepe",
            "name_ar": "كريب لحمة بلدي",
            "desc_en": "Fresh Egyptian baladi minced meat with chef spices and cheese",
            "desc_ar": "لحمة بلدي طازة - جبنة",
            "price": 200,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-kofta",
            "name_en": "Grilled Kofta Crepe",
            "name_ar": "كريب كفتة",
            "desc_en": "Charbroiled spiced beef kofta, melted cheese, tahini hint",
            "desc_ar": "كفتة مشوية متبلة - جبنة",
            "price": 190,
            "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-sausage",
            "name_en": "Sausage Crepe",
            "name_ar": "كريب سوسيس",
            "desc_en": "Seasoned frankfurter sausage with molten cheese and savory sauce",
            "desc_ar": "سوسيس متبل - جبنة مذابة",
            "price": 150,
            "image": "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-burger",
            "name_en": "Beef Burger Crepe",
            "name_ar": "كريب برجر",
            "desc_en": "Flame-grilled beef burger patty, special signature sauce, cheese",
            "desc_ar": "قطعة برجر لحم - صلصة خاصة - جبنة",
            "price": 160,
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "crepe-mix-meat",
            "name_en": "Meat Lovers Mix Crepe",
            "name_ar": "كريب ميكس لحوم",
            "desc_en": "Trio of minced beef, grilled kofta, and sausage with melted cheese",
            "desc_ar": "لحم - كفتة - سوسيس - جبنة",
            "price": 200,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "combo",
        "name_en": "Combo Meals",
        "name_ar": "الكومبو",
        "desc_en": "Every combo includes: Sandwich + Crispy Fries + Ice-Cold Pepsi",
        "desc_ar": "كل كومبو: ساندوتش + بطاطس كرسبي + بيبسي",
        "items": [
          {
            "id": "combo-chicken-liver",
            "name_en": "Chicken Liver Combo",
            "name_ar": "كومبو كبدة دجاج",
            "desc_en": "Seasoned chicken liver sandwich + golden crispy fries + Pepsi",
            "desc_ar": "ساندوتش كبدة دجاج مشوية متبلة + بطاطس كرسبي + بيبسي",
            "price": 150,
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-fajita",
            "name_en": "Chicken Fajita Combo",
            "name_ar": "كومبو فاهيتا",
            "desc_en": "Chicken fajita sandwich with bell peppers + crispy fries + Pepsi",
            "desc_ar": "ساندوتش فاهيتا دجاج مع فلفل ألوان + بطاطس كرسبي + بيبسي",
            "price": 180,
            "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-meat-liver",
            "name_en": "Lamb Liver Combo",
            "name_ar": "كومبو كبدة لحم",
            "desc_en": "Fresh meat liver with Alexandrian spices + crispy fries + Pepsi",
            "desc_ar": "ساندوتش كبدة لحم طازة بخلطة إسكندراني + بطاطس كرسبي + بيبسي",
            "price": 190,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-meat-potato",
            "name_en": "Minced Meat & Potato Combo",
            "name_ar": "كومبو لحم بالبطاطس",
            "desc_en": "Spiced minced meat with golden fries sandwich + crispy fries + Pepsi",
            "desc_ar": "ساندوتش لحم بالبطاطس والصلصة الخاصة + بطاطس كرسبي + بيبسي",
            "price": 201,
            "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-philly",
            "name_en": "Philly Cheesesteak Combo",
            "name_ar": "كومبو فيلي",
            "desc_en": "Tender beef slices with melted cheddar and caramelized onions + crispy fries + Pepsi",
            "desc_ar": "ساندوتش شرائح فيلي لحم بجبنة شيدر وبصل وفلفل + بطاطس كرسبي + بيبسي",
            "price": 210,
            "image": "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-francisco",
            "name_en": "Francisco Chicken Combo",
            "name_ar": "كومبو فرانسيسكو",
            "desc_en": "Crispy chicken breast with Francisco sauce and cheese + crispy fries + Pepsi",
            "desc_ar": "ساندوتش فرانسيسكو دجاج مع صلصة فرانسيسكو وجبنة مذابة + بطاطس كرسبي + بيبسي",
            "price": 215,
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "combo-twister",
            "name_en": "Twister Chicken Wrap Combo",
            "name_ar": "كومبو تويستر",
            "desc_en": "Crispy chicken twister wrap with fresh lettuce and sauce + crispy fries + Pepsi",
            "desc_ar": "ساندوتش تويستر دجاج ملفوف مقرمش بالخس والصوص + بطاطس كرسبي + بيبسي",
            "price": 220,
            "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "pizza",
        "name_en": "Pizza",
        "name_ar": "البيتزا",
        "desc_en": "Artisan stone-baked crust with premium mozzarella (M Medium / L Large)",
        "desc_ar": "عجينة إيطالية مخبوزة على الحطب مع جبنة موتزاريلا طبيعية (وسط M / كبير L)",
        "items": [
          {
            "id": "pizza-turkey-chicken",
            "name_en": "Smoked Turkey & Chicken Pizza",
            "name_ar": "بيتزا تركي مدخن دجاج",
            "desc_en": "Smoked turkey slices, chicken, tomato sauce, mozzarella",
            "desc_ar": "تركي مدخن - دجاج - صلصة طماطم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 145
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 200
              }
            ],
            "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-sujuk",
            "name_en": "Sujuk Pizza",
            "name_ar": "بيتزا سجق",
            "desc_en": "Spiced oriental sujuk, tomato sauce, mozzarella",
            "desc_ar": "سجق متبل - صلصة طماطم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 140
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 185
              }
            ],
            "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-chicken-strips",
            "name_en": "Chicken Strips Pizza",
            "name_ar": "بيتزا استريس دجاج",
            "desc_en": "Crispy chicken strips, special sauce, mozzarella",
            "desc_ar": "استريس دجاج مقرمش - صلصة خاصة - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 140
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 185
              }
            ],
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-meat",
            "name_en": "Meat Pizza",
            "name_ar": "بيتزا لحم",
            "desc_en": "Seasoned minced meat, tomato sauce, mozzarella",
            "desc_ar": "لحم مفروم متبل - صلصة طماطم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 160
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 200
              }
            ],
            "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-chicken-shish",
            "name_en": "Chicken Shish Tawook Pizza",
            "name_ar": "بيتزا شيش طاووق دجاج",
            "desc_en": "Grilled shish tawook chicken, garlic herb sauce, mozzarella",
            "desc_ar": "شيش طاووق مشوي - صلصة ثوم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 155
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 200
              }
            ],
            "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-vegetables",
            "name_en": "Vegetables Pizza",
            "name_ar": "بيتزا خضروات",
            "desc_en": "Fresh bell peppers, mushrooms, kalamata olives, tomato sauce, mozzarella",
            "desc_ar": "خضار مشكل - صلصة طماطم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 125
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 165
              }
            ],
            "image": "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-pepperoni",
            "name_en": "Pepperoni Pizza",
            "name_ar": "بيتزا ببيروني",
            "desc_en": "Smoked beef pepperoni slices, rich tomato sauce, mozzarella",
            "desc_ar": "ببيروني مدخن - صلصة طماطم - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 150
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 190
              }
            ],
            "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-fajita-chicken",
            "name_en": "Chicken Fajita Pizza",
            "name_ar": "بيتزا فاهيتا دجاج",
            "desc_en": "Marinated chicken fajita, colorful peppers, special sauce, mozzarella",
            "desc_ar": "فاهيتا دجاج - فلفل ألوان - صلصة خاصة - موتزاريلا",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 130
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 200
              }
            ],
            "image": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-liver-cheese",
            "name_en": "Four Cheeses Pizza (Liver Cheese)",
            "name_ar": "بيتزا ليفر تشيز",
            "desc_en": "Mozzarella, cheddar, roumi and parmesan cheeses blend",
            "desc_ar": "موتزاريلا - شيدر - جبنة رومي - بارميزان",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 140
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 200
              }
            ],
            "image": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-margherita",
            "name_en": "Margherita Pizza",
            "name_ar": "بيتزا مارجريتا",
            "desc_en": "Italian classic tomato sauce, pure mozzarella, aromatic fresh basil",
            "desc_ar": "صلصة طماطم - موتزاريلا - ريحان",
            "prices": [
              {
                "label_en": "M",
                "label_ar": "وسط",
                "price": 100
              },
              {
                "label_en": "L",
                "label_ar": "كبير",
                "price": 150
              }
            ],
            "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-family",
            "name_en": "Family Pizza (Build Your Own)",
            "name_ar": "بيتزا فاميلي (Build Your Own)",
            "desc_en": "Extra-large family size with your choice of favorite toppings and cheeses",
            "desc_ar": "اختار مكوناتك - حجم عائلي",
            "price": 400,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pizza-kids",
            "name_en": "Laguna Kids Pizza",
            "name_ar": "بيتزا أطفال لاجونا دبي",
            "desc_en": "Small kids pizza accompanied by a complimentary fresh juice",
            "desc_ar": "حجم صغير - مع عصير هدية",
            "price": 150,
            "image": "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "sandwiches",
        "name_en": "Sandwiches",
        "name_ar": "الساندوتشات",
        "desc_en": "Freshly prepared gourmet sandwiches on toasted baguettes (Small / Large)",
        "desc_ar": "ساندوتشات طازجة مخبوزة بعناية (صغير / كبير)",
        "items": [
          {
            "id": "sand-chicken-liver",
            "name_en": "Chicken Liver Sandwich",
            "name_ar": "ساندوتش كبدة دجاج",
            "desc_en": "Grilled marinated chicken liver with fresh herbs and vegetables",
            "desc_ar": "دجاج مشوي - خضار",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 100
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 120
              }
            ],
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-chicken-fajita",
            "name_en": "Chicken Fajita Sandwich",
            "name_ar": "ساندوتش فاهيتا دجاج",
            "desc_en": "Sautéed chicken fajita, melted cheese, bell peppers",
            "desc_ar": "فاهيتا دجاج - جبنة - خضار",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 100
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 120
              }
            ],
            "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-lamb-liver",
            "name_en": "Fresh Lamb Liver Sandwich",
            "name_ar": "ساندوتش كبدة غنم",
            "desc_en": "Tender fresh lamb liver with signature sauce and crisp veggies",
            "desc_ar": "كبدة غنم طازة - صلصة خاصة - خضار طازة",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 120
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 130
              }
            ],
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-meat-potato",
            "name_en": "Meat & Crispy Potato Sandwich",
            "name_ar": "ساندوتش لحم بالبطاطس",
            "desc_en": "Seasoned minced beef, crispy fries, signature house sauce",
            "desc_ar": "لحم مفروم - بطاطس كرسبي - صلصة خاصة",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 120
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 150
              }
            ],
            "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-philly-meat",
            "name_en": "Philly Beef Cheesesteak Sandwich",
            "name_ar": "ساندوتش فيلي لحم",
            "desc_en": "Thinly sliced tender steak, melted cheese, sautéed onions and peppers",
            "desc_ar": "شرائح فيلي لحم - جبنة مذابة - فلفل وبصل",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 140
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 160
              }
            ],
            "image": "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-francisco-chicken",
            "name_en": "Francisco Chicken Sandwich",
            "name_ar": "ساندوتش فرانسيسكو دجاج",
            "desc_en": "Crispy seasoned chicken, creamy Francisco dressing, melted cheese",
            "desc_ar": "دجاج مقرمش - صلصة فرانسيسكو - جبنة مذابة",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 120
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 155
              }
            ],
            "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-twister-chicken",
            "name_en": "Twister Chicken Wrap",
            "name_ar": "ساندوتش تويستر دجاج",
            "desc_en": "Crispy chicken strips wrapped in tortilla with lettuce and special sauce",
            "desc_ar": "دجاج ملفوف مقرمش - خس - صلصة خاصة",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 120
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 160
              }
            ],
            "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "sand-hot-dog",
            "name_en": "Grilled Hot Dog Sandwich",
            "name_ar": "ساندوتش هوت دوج",
            "desc_en": "Charbroiled hot dog sausage, mustard, ketchup, fresh lettuce",
            "desc_ar": "سجق هوت دوج مشوي - مسطردة وكاتشب - خس",
            "prices": [
              {
                "label_en": "Small",
                "label_ar": "صغير",
                "price": 120
              },
              {
                "label_en": "Large",
                "label_ar": "كبير",
                "price": 140
              }
            ],
            "image": "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "desserts",
        "name_en": "Desserts",
        "name_ar": "الحلويات",
        "desc_en": "Artisanal pastries, cakes, and gourmet desserts",
        "desc_ar": "كيك وحلويات فاخرة محضرة بأجود المكونات",
        "items": [
          {
            "id": "dessert-molten-cake",
            "name_en": "Molten Lava Cake",
            "name_ar": "مولتن كيك",
            "desc_en": "Rich warm chocolate cake with molten chocolate core",
            "desc_ar": "كيكة شوكولاتة دافئة مع قلب شوكولاتة غني يذوب عند التقديم",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-molten-cake-large",
            "name_en": "Large Molten Lava Cake",
            "name_ar": "مولتن كيك (كبير)",
            "desc_en": "Double-sized molten lava chocolate cake with ice cream scoop",
            "desc_ar": "حجم كبير غني بصوص الشوكولاتة الذائب",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-cheesecake",
            "name_en": "New York Cheesecake",
            "name_ar": "تشيز كيك",
            "desc_en": "Velvety cream cheesecake on buttery biscuit base with fruit coulis",
            "desc_ar": "تشيز كيك نيويورك الفاخر مع صوص التوت البري",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-fudge-walnut",
            "name_en": "Walnut Fudge Cake",
            "name_ar": "فادج عين الجمل",
            "desc_en": "Decadent dark chocolate fudge topped with crunchy toasted walnuts",
            "desc_ar": "فادج شوكولاتة غني مع حبات عين الجمل المحمصة",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-fudge-florence",
            "name_en": "Florence Fudge Cake",
            "name_ar": "فادج فلونس",
            "desc_en": "Signature Italian Florence fudge cake with dark chocolate layers",
            "desc_ar": "فادج فلونس الإيطالي بطبقات الشوكولاتة الغنية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-red-velvet",
            "name_en": "Red Velvet Cake",
            "name_ar": "ريد فيلفيت",
            "desc_en": "Classic crimson sponge cake layered with cream cheese frosting",
            "desc_ar": "كيكة الريد فيلفيت الكلاسيكية مع كريمة الجبن الفاخرة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-despacito",
            "name_en": "Despacito Cake",
            "name_ar": "ديسباسيتو",
            "desc_en": "Moist chocolate sponge soaked in chocolate milk and mousse",
            "desc_ar": "كيكة ديسباسيتو البرازيلية الغارقة في صوص الشوكولاتة",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-mini-rocher",
            "name_en": "Mini Rocher",
            "name_ar": "ميني روشيه",
            "desc_en": "Mini Ferrero Rocher dessert cup with hazelnut crunch",
            "desc_ar": "حلوى ميني روشيه مع كرانشي البندق والشوكولاتة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-mini-red-velvet",
            "name_en": "Mini Red Velvet",
            "name_ar": "ميني ريد فيلفت",
            "desc_en": "Individual red velvet cups with creamy frosting",
            "desc_ar": "أكواب ميني ريد فيلفت بطبقات الكريمة المخملية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-mini-florence",
            "name_en": "Mini Florence",
            "name_ar": "ميني فلونس",
            "desc_en": "Delicate Italian chocolate confection",
            "desc_ar": "حلوى ميني فلونس الفاخرة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "dessert-tiramisu",
            "name_en": "Italian Tiramisu",
            "name_ar": "تيراميسو",
            "desc_en": "Espresso-dipped ladyfingers layered with mascarpone cream and cocoa",
            "desc_ar": "تيراميسو إيطالي أصيل بطبقات كريمة الماسكاربوني والإسبريسو",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "waffles",
        "name_en": "Waffles",
        "name_ar": "الوافل",
        "desc_en": "Golden crispy Belgian waffles with decadent toppings and chocolates",
        "desc_ar": "وافل بلجيكي مقرمش مع أشهى الصوصات العالمية",
        "items": [
          {
            "id": "waffle-nutella",
            "name_en": "Nutella Waffle",
            "name_ar": "وافل نوتيلا",
            "desc_en": "Belgian waffle smothered with authentic Nutella hazelnut spread",
            "desc_ar": "وافل مغطى بشوكولاتة النوتيلا الغنية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-white",
            "name_en": "White Chocolate Waffle",
            "name_ar": "وافل وايت",
            "desc_en": "Crispy waffle topped with creamy Belgian white chocolate",
            "desc_ar": "وافل بالشوكولاتة البيضاء البلجيكية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-caramel",
            "name_en": "Caramel Waffle",
            "name_ar": "وافل كراميل",
            "desc_en": "Warm waffle drizzled with salted butter caramel sauce",
            "desc_ar": "وافل مع صوص الكراميل اللذيذ",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-honey",
            "name_en": "Natural Honey Waffle",
            "name_ar": "وافل عسل",
            "desc_en": "Golden waffle served with pure mountain honey",
            "desc_ar": "وافل مع عسل النحل الطبيعي الصافي",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-honey-banana",
            "name_en": "Honey & Banana Waffle",
            "name_ar": "وافل عسل وموز",
            "desc_en": "Crisp waffle paired with fresh sliced banana and honey",
            "desc_ar": "وافل مع شرائح الموز الطازج وعسل النحل",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-lotus",
            "name_en": "Lotus Biscoff Waffle",
            "name_ar": "وافل لوتس",
            "desc_en": "Waffle topped with Lotus Biscoff spread and crushed cookies",
            "desc_ar": "وافل مغطى بزبدة وبسكويت اللوتس المقرمش",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-nutella-oreo",
            "name_en": "Nutella & Oreo Waffle",
            "name_ar": "وافل نوتيلا وأوريو",
            "desc_en": "Nutella spread layered with crushed Oreo biscuits",
            "desc_ar": "وافل بالنوتيلا مع قطع بسكويت الأوريو",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-dark",
            "name_en": "Dark Chocolate Waffle",
            "name_ar": "وافل دارك",
            "desc_en": "Decadent dark cocoa chocolate glaze on warm waffle",
            "desc_ar": "وافل مغطى بالشوكولاتة الداكنة الفاخرة",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-kinder",
            "name_en": "Kinder Chocolate Waffle",
            "name_ar": "وافل كندر",
            "desc_en": "Waffle drenched in creamy Kinder chocolate cream",
            "desc_ar": "وافل بصوص شوكولاتة كندر الأصلية",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-pistachio",
            "name_en": "Pistachio Waffle",
            "name_ar": "وافل بيستاشيو",
            "desc_en": "Premium Sicilian pistachio cream and roasted pistachios",
            "desc_ar": "وافل غني بكريمة الفستق الحلبي والمكسرات",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-laguna",
            "name_en": "Signature Laguna Waffle",
            "name_ar": "وافل لاجونا",
            "desc_en": "Chef special combination of tri-chocolate, fresh berries and ice cream",
            "desc_ar": "وافل لاجونا الخاص بتشكيلة شوكولاتة ثلاثية وفواكه وآيس كريم",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "waffle-four-seasons",
            "name_en": "Four Seasons Waffle",
            "name_ar": "وافل فور سيزونز",
            "desc_en": "Four distinct quarters: Nutella, White chocolate, Lotus, and Pistachio",
            "desc_ar": "أربعة أقسام بأشهى الصوصات: نوتيلا، وايت، لوتس، وبيستاشيو",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "waffle-bubbles",
        "name_en": "Bubble Waffles",
        "name_ar": "وافل بابل",
        "desc_en": "Crispy outside, fluffy inside Hong Kong style bubble waffles",
        "desc_ar": "وافل الفقاعات الهش المحشو بالشوكولاتة والآيس كريم والفواكه",
        "items": [
          {
            "id": "bubble-nutella",
            "name_en": "Nutella Bubble Waffle",
            "name_ar": "بابل نوتيلا",
            "desc_en": "Warm bubble waffle folded with generous Nutella drizzle",
            "desc_ar": "بابل وافل مع صوص النوتيلا",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-white",
            "name_en": "White Chocolate Bubble",
            "name_ar": "بابل وايت",
            "desc_en": "Bubble waffle layered with smooth white chocolate",
            "desc_ar": "بابل وافل بالشوكولاتة البيضاء",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-dark",
            "name_en": "Dark Chocolate Bubble",
            "name_ar": "بابل دارك",
            "desc_en": "Deep dark chocolate coating on crisp bubble waffle",
            "desc_ar": "بابل وافل بالشوكولاتة الداكنة",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-ice-cream",
            "name_en": "Ice Cream Bubble Waffle",
            "name_ar": "بابل آيس كريم",
            "desc_en": "Warm bubble cone holding creamy vanilla ice cream scoops",
            "desc_ar": "بابل وافل محشو ببول آيس كريم منعش",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-nutella-nuts-ice",
            "name_en": "Nutella, Nuts & Ice Cream Bubble",
            "name_ar": "بابل نوتيلا ومكسرات (آيس كريم)",
            "desc_en": "Nutella, roasted nuts, and creamy ice cream loaded in bubble waffle",
            "desc_ar": "بابل وافل مع نوتيلا ومكسرات وبولة آيس كريم",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-caramel",
            "name_en": "Caramel Bubble Waffle",
            "name_ar": "بابل كراميل",
            "desc_en": "Golden caramel sauce drizzled over bubble waffle",
            "desc_ar": "بابل وافل مع صوص الكراميل الناعم",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-fruits",
            "name_en": "Fresh Fruits Bubble Waffle",
            "name_ar": "بابل فواكه",
            "desc_en": "Strawberries, kiwi, and banana slices on warm bubble waffle",
            "desc_ar": "بابل وافل محشو بتشكيلة فواكه طازجة",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-banana-honey",
            "name_en": "Banana & Honey Bubble",
            "name_ar": "بابل موز وعسل",
            "desc_en": "Sliced bananas with natural honey on crispy bubbles",
            "desc_ar": "بابل وافل مع شرائح الموز وعسل النحل",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-banana-nutella",
            "name_en": "Banana & Nutella Bubble",
            "name_ar": "بابل موز ونوتيلا",
            "desc_en": "The classic pair of sweet bananas and Nutella in bubble waffle",
            "desc_ar": "بابل وافل مع موز وشوكولاتة نوتيلا",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "bubble-laguna",
            "name_en": "Signature Laguna Bubble Waffle",
            "name_ar": "بابل لاجونا",
            "desc_en": "Lavish bubble waffle stuffed with ice cream, fruits, Belgian chocolate and nuts",
            "desc_ar": "بابل لاجونا الفاخر مع آيس كريم ومكسرات وصوصات مميزة",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "pancakes",
        "name_en": "Pancakes",
        "name_ar": "بان كيك",
        "desc_en": "Fluffy golden mini pancakes stacked with gourmet syrups",
        "desc_ar": "ميني بان كيك طازج مع تشكيلة صوصات شهية",
        "items": [
          {
            "id": "pancake-8",
            "name_en": "Pancakes (8 Pieces)",
            "name_ar": "بان كيك (8 قطع)",
            "desc_en": "8 freshly made fluffy mini pancakes with chocolate or syrup",
            "desc_ar": "8 قطع ميني بان كيك ذهبي مع صوص الشوكولاتة",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pancake-12",
            "name_en": "Pancakes (12 Pieces)",
            "name_ar": "بان كيك (12 قطعة)",
            "desc_en": "12 fluffy mini pancakes served with your choice of chocolate or honey",
            "desc_ar": "12 قطعة ميني بان كيك مع صوصات منوعة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "pancake-laguna",
            "name_en": "Signature Laguna Pancakes",
            "name_ar": "بان كيك لاجونا",
            "desc_en": "Tower of pancakes with fresh berries, lotus, chocolate and ice cream scoop",
            "desc_ar": "بان كيك لاجونا الملكي مع فواكه طازجة وصوصات فاخرة وبولة آيس كريم",
            "price": 100,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=800&q=80"
          }
        ]
      }
    ]
  },
  {
    "id": "drinks",
    "name_en": "DRINKS",
    "name_ar": "المشروبات",
    "subcategories": [
      {
        "id": "fresh-juices",
        "name_en": "Fresh Juices",
        "name_ar": "فريش",
        "desc_en": "Pure, cold-pressed 100% natural fruit juices made to order",
        "desc_ar": "عصائر فواكه طبيعية 100% طازجة بدون إضافات",
        "items": [
          {
            "id": "fresh-mango",
            "name_en": "Fresh Mango",
            "name_ar": "مانجو",
            "desc_en": "Pure Egyptian sweet mango pulp",
            "desc_ar": "عصير مانجو فريش طبيعي",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-strawberry",
            "name_en": "Fresh Strawberry",
            "name_ar": "فراولة",
            "desc_en": "Freshly squeezed ripe strawberries",
            "desc_ar": "عصير فراولة طبيعي منعش",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-strawberry-milk",
            "name_en": "Strawberry with Milk",
            "name_ar": "فراولة (حليب)",
            "desc_en": "Blended fresh strawberries with whole milk",
            "desc_ar": "فراولة بالحليب الطبيعي",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-orange",
            "name_en": "Fresh Orange",
            "name_ar": "برتقال",
            "desc_en": "Pure freshly squeezed orange juice",
            "desc_ar": "برتقال بلدي معصور طازجاً",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-guava",
            "name_en": "Fresh Guava",
            "name_ar": "جوافة",
            "desc_en": "Sweet fragrant white guava",
            "desc_ar": "عصير جوافة فريش",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-guava-milk",
            "name_en": "Guava with Milk",
            "name_ar": "جوافة (حليب)",
            "desc_en": "Creamy guava blended with milk",
            "desc_ar": "جوافة بالحليب",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-banana-milk",
            "name_en": "Banana with Milk",
            "name_ar": "موز (حليب)",
            "desc_en": "Fresh bananas whipped with cold milk and honey touch",
            "desc_ar": "موز فريش بالحليب",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-lemon",
            "name_en": "Fresh Lemonade",
            "name_ar": "ليمون",
            "desc_en": "Zesty freshly pressed lemon juice",
            "desc_ar": "ليمون معصور طازج",
            "price": 45,
            "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-lemon-mint",
            "name_en": "Lemon Mint",
            "name_ar": "ليمون نعناع",
            "desc_en": "Classic crushed lemon with fresh garden mint leaves",
            "desc_ar": "ليمون بالنعناع الأخضر المنعش",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-lemon-french",
            "name_en": "French Lemonade",
            "name_ar": "ليمون فرنساوي",
            "desc_en": "Creamy whipped French lemonade",
            "desc_ar": "ليمون فرنساوي كريمي مميز",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-kiwi",
            "name_en": "Fresh Kiwi",
            "name_ar": "كيوي",
            "desc_en": "Tart and sweet fresh kiwi purée",
            "desc_ar": "عصير كيوي طبيعي",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-kiwi-milk",
            "name_en": "Kiwi with Milk",
            "name_ar": "كيوي (حليب)",
            "desc_en": "Smooth kiwi blended with milk",
            "desc_ar": "كيوي بالحليب",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-avocado",
            "name_en": "Fresh Avocado",
            "name_ar": "أفوكادو",
            "desc_en": "Nutrient-rich creamy Hass avocado with honey",
            "desc_ar": "عصير أفوكادو فريش بالعسل",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-dates",
            "name_en": "Dates with Milk",
            "name_ar": "بلح",
            "desc_en": "Sweet dates blended with rich milk",
            "desc_ar": "بلح بالحليب الطبيعي المغذي",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-pomegranate",
            "name_en": "Fresh Pomegranate",
            "name_ar": "رمان",
            "desc_en": "Pure Ruby red pomegranate juice",
            "desc_ar": "عصير رمان فريش",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "fresh-pomegranate-milk",
            "name_en": "Pomegranate with Milk",
            "name_ar": "رمان (حليب)",
            "desc_en": "Pomegranate blended with milk",
            "desc_ar": "رمان بالحليب",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "fresh-cocktails",
        "name_en": "Fresh Cocktails",
        "name_ar": "كوكتيل فريش",
        "desc_en": "Artisanal handcrafted fruit cocktail blends",
        "desc_ar": "خلطات كوكتيل فواكه طبيعية منعشة ومغذية",
        "items": [
          {
            "id": "cocktail-hawaii",
            "name_en": "Hawaii Cocktail",
            "name_ar": "هاواي",
            "desc_en": "Pineapple, orange, and sweet peach",
            "desc_ar": "أناناس - برتقال - خوخ",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-florida",
            "name_en": "Florida Cocktail",
            "name_ar": "فلوريدا",
            "desc_en": "Guava, mango, and fresh strawberry",
            "desc_ar": "جوافة - مانجو - فراولة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-larose",
            "name_en": "La Rose Cocktail",
            "name_ar": "لاروز",
            "desc_en": "Strawberry, kiwi, and sweet mango",
            "desc_ar": "فراولة - كيوي - مانجو",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-tamr",
            "name_en": "Tamr Power Cocktail",
            "name_ar": "تمر",
            "desc_en": "Dates, kiwi, and mango energy blend",
            "desc_ar": "تمر - كيوي - مانجو",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-white-ocean",
            "name_en": "White Ocean",
            "name_ar": "وايت أوشن",
            "desc_en": "Banana, vanilla ice cream, mixed nuts, and whipped cream",
            "desc_ar": "موز - آيس كريم - مكسرات - كريمة",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-da-bomba",
            "name_en": "Da Bomba Cocktail",
            "name_ar": "دا بومبا",
            "desc_en": "Strawberry, kiwi, banana, and fresh orange",
            "desc_ar": "فراولة - كيوي - موز - برتقال",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-delight-punch",
            "name_en": "Delight Punch",
            "name_ar": "دلايت بانش",
            "desc_en": "Orange, guava, lemon, and natural honey",
            "desc_ar": "برتقال - جوافة - ليمون - عسل",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-power-boost",
            "name_en": "Power Boost",
            "name_ar": "باور بوست",
            "desc_en": "Creamy avocado, crunchy nuts, whipped cream, and pure honey",
            "desc_ar": "أفوكادو - مكسرات - كريمة - عسل",
            "price": 100,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "cocktail-tsunami",
            "name_en": "Tsunami Cocktail",
            "name_ar": "تسونامي",
            "desc_en": "Mango, passion fruit, and tropical pineapple",
            "desc_ar": "مانجو - باشون - أناناس",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "hot-drinks",
        "name_en": "Hot Drinks",
        "name_ar": "مشروبات ساخنة",
        "desc_en": "Traditional and comforting warm teas and hot beverages",
        "desc_ar": "شاي ومشروبات ساخنة كلاسيكية محضرة بأعلى جودة",
        "items": [
          {
            "id": "hot-tea-plain",
            "name_en": "Plain Black Tea",
            "name_ar": "شاي سادة",
            "desc_en": "Finest Ceylon black tea",
            "desc_ar": "شاي سيلاني أسود فاخر",
            "price": 20,
            "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-tea-fruits",
            "name_en": "Fruit Infused Tea",
            "name_ar": "شاي فواكه",
            "desc_en": "Aromatic herbal fruit tea blend",
            "desc_ar": "شاي بنكهة الفواكه الطبيعية",
            "price": 30,
            "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-tea-milk",
            "name_en": "Tea with Milk",
            "name_ar": "شاي بالحليب",
            "desc_en": "Black tea with steamed milk",
            "desc_ar": "شاي أحمر بالحليب",
            "price": 45,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-tea-karak",
            "name_en": "Karak Spiced Chai",
            "name_ar": "شاي كرك",
            "desc_en": "Slow-simmered tea with evaporated milk, cardamom and spices",
            "desc_ar": "شاي كرك بالحليب والهيل والزعفران",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-tea-complete",
            "name_en": "Complete Tea",
            "name_ar": "شاي كومبليت",
            "desc_en": "Special full-flavor spiced tea pot",
            "desc_ar": "شاي كومبليت بالخلطة الغنية",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-tea-green",
            "name_en": "Green Tea",
            "name_ar": "شاي أخضر",
            "desc_en": "Antioxidant-rich whole leaf green tea",
            "desc_ar": "شاي أخضر نقي بالنعناع",
            "price": 25,
            "image": "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-sahlab-plain",
            "name_en": "Plain Sahlab",
            "name_ar": "سحلب سادة",
            "desc_en": "Traditional Middle Eastern orchid milk drink with cinnamon",
            "desc_ar": "سحلب ساخن كريمي مع رشة قرفة",
            "price": 45,
            "image": "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-sahlab-nuts",
            "name_en": "Sahlab with Nuts",
            "name_ar": "سحلب مكسرات",
            "desc_en": "Creamy sahlab topped with roasted hazelnuts and almonds",
            "desc_ar": "سحلب غني بالمكسرات المحمصة والزبيب",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-sahlab-laguna",
            "name_en": "Signature Laguna Sahlab",
            "name_ar": "سحلب لاجونا",
            "desc_en": "Laguna luxury sahlab with premium pistachios, nuts, and mastic",
            "desc_ar": "سحلب لاجونا الخاص بالمستكة والمكسرات الفاخرة",
            "price": 65,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-chocolate",
            "name_en": "Hot Chocolate",
            "name_ar": "هوت شوكليت",
            "desc_en": "Steamed whole milk with Belgian cocoa",
            "desc_ar": "شوكولاتة ساخنة كريمية فاخرة",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-chocolate-marshmallow",
            "name_en": "Hot Chocolate with Marshmallow",
            "name_ar": "هوت شوكليت (مارشميلو)",
            "desc_en": "Hot chocolate topped with fluffy marshmallows",
            "desc_ar": "هوت شوكليت مع قطع المارشميلو الذائبة",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-oreo",
            "name_en": "Hot Oreo",
            "name_ar": "هوت أوريو",
            "desc_en": "Warm chocolate milk blended with Oreo cookies",
            "desc_ar": "مشروب أوريو ساخن مع الكريمة",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-lotus",
            "name_en": "Hot Lotus",
            "name_ar": "هوت لوتس",
            "desc_en": "Steamed spiced Lotus Biscoff speculoos drink",
            "desc_ar": "مشروب زبدة اللوتس الساخن مع البسكويت",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-nutella",
            "name_en": "Hot Nutella",
            "name_ar": "هوت نوتيلا",
            "desc_en": "Velvety warm Nutella chocolate milk",
            "desc_ar": "مشروب النوتيلا الإيطالي الساخن",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "hot-laguna",
            "name_en": "Signature Hot Laguna",
            "name_ar": "هوت لاجونا",
            "desc_en": "Exclusive Laguna cocoa recipe with Belgian chocolate blend",
            "desc_ar": "مشروب هوت لاجونا الخاص بتوليفة الشوكولاتة والكراميل",
            "price": 60,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "coffee",
        "name_en": "Coffee",
        "name_ar": "قهوة",
        "desc_en": "Specialty espresso drinks and traditional brews",
        "desc_ar": "قهوة مختصة محضرة من أجود حبوب البن المحمصة",
        "items": [
          {
            "id": "coffee-turkish",
            "name_en": "Turkish Coffee",
            "name_ar": "قهوة تركي",
            "desc_en": "Finely ground Arabica simmered with authentic foam",
            "desc_ar": "قهوة تركي على أصولها مع وش كثيف",
            "price": 30,
            "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-french",
            "name_en": "French Coffee",
            "name_ar": "قهوة فرنسي",
            "desc_en": "Smooth Turkish coffee with fresh steamed milk",
            "desc_ar": "قهوة فرنساوي بالحليب الغني",
            "price": 45,
            "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-hazelnut",
            "name_en": "Hazelnut Coffee",
            "name_ar": "قهوة بندق",
            "desc_en": "Aromatic Turkish coffee infused with roasted hazelnut",
            "desc_ar": "قهوة تركي بنكهة البندق المحمص",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-nutella",
            "name_en": "Nutella Coffee",
            "name_ar": "قهوة نوتيلا",
            "desc_en": "Turkish coffee swirled with melted Nutella",
            "desc_ar": "قهوة بنكهة شوكولاتة النوتيلا",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-espresso-single",
            "name_en": "Single Espresso",
            "name_ar": "إسبريسو سنجل",
            "desc_en": "Rich concentrated single shot with thick golden crema",
            "desc_ar": "شوت إسبريسو نقي مركز مع كريما ذهبية",
            "price": 40,
            "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-espresso-double",
            "name_en": "Double Espresso",
            "name_ar": "إسبريسو دبل",
            "desc_en": "Double shot of premium roasted espresso",
            "desc_ar": "دبل شوت إسبريسو قوي المذاق",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-macchiato",
            "name_en": "Macchiato",
            "name_ar": "ماكياتو",
            "desc_en": "Espresso stained with a dollop of velvety milk foam",
            "desc_ar": "إسبريسو مع لمسة رغوة حليب ناعمة",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-macchiato-caramel",
            "name_en": "Caramel Macchiato",
            "name_ar": "ماكياتو كراميل",
            "desc_en": "Layered espresso, steamed milk, and vanilla caramel drizzle",
            "desc_ar": "ماكياتو بصوص الكراميل والفانيليا",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-cortado",
            "name_en": "Cortado",
            "name_ar": "كورتادو",
            "desc_en": "Equal parts espresso and lightly steamed milk",
            "desc_ar": "كورتادو متوازن بنسب متساوية من الإسبريسو والحليب",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-cappuccino",
            "name_en": "Cappuccino",
            "name_ar": "كابتشينو",
            "desc_en": "Classic equal thirds of espresso, steamed milk, and dense foam",
            "desc_ar": "كابتشينو إيطالي كلاسيكي برغوة غنية وبودرة كاكاو",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-latte",
            "name_en": "Caffè Latte",
            "name_ar": "لاتيه",
            "desc_en": "Espresso with silky microfoam milk",
            "desc_ar": "لاتيه ناعم بحليب مبخر بعناية ورسمة فنية",
            "price": 55,
            "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-spanish-latte",
            "name_en": "Spanish Latte",
            "name_ar": "لاتيه إسباني",
            "desc_en": "Espresso sweetened with creamy condensed milk",
            "desc_ar": "لاتيه إسباني ساخن بالحليب المكثف المحلى",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-affogato",
            "name_en": "Affogato Avocado (Espresso & Ice Cream)",
            "name_ar": "أفوكادو (إسبريسو - آيس كريم)",
            "desc_en": "Scoop of ice cream drowned in hot freshly pulled espresso",
            "desc_ar": "بولة آيس كريم فانيليا غارقة في شوت إسبريسو ساخن",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "coffee-flavor-shot",
            "name_en": "Extra Flavor Shot",
            "name_ar": "إضافة نكهة",
            "desc_en": "Add Vanilla, Caramel, Hazelnut or Toffee syrup",
            "desc_ar": "إضافة سيرب نكهة فانيليا أو كراميل أو بندق",
            "price": 20,
            "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "hot-matcha",
        "name_en": "Hot Matcha",
        "name_ar": "ماتشا ساخنة",
        "desc_en": "Ceremonial grade Japanese green tea matcha whisked to perfection",
        "desc_ar": "ماتشا يابانية عضوية فاخرة مخفوقة بالحليب الساخن",
        "items": [
          {
            "id": "matcha-hot-latte",
            "name_en": "Matcha Latte",
            "name_ar": "ماتشا لاتيه",
            "desc_en": "Pure ceremonial matcha whisked with steamed milk",
            "desc_ar": "ماتشا يابانية نقية مع حليب مبخر ناعم",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-hot-vanilla",
            "name_en": "Vanilla Matcha Latte",
            "name_ar": "ماتشا لاتيه فانيليا",
            "desc_en": "Matcha latte infused with aromatic Madagascar vanilla",
            "desc_ar": "ماتشا لاتيه بنكهة الفانيليا الطبيعية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-hot-spanish",
            "name_en": "Spanish Hot Matcha",
            "name_ar": "ماتشا إسباني",
            "desc_en": "Whisked matcha sweetened with condensed milk",
            "desc_ar": "ماتشا إسباني ساخنة مع الحليب المكثف المحلى",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-hot-coconut",
            "name_en": "Coconut Milk Matcha",
            "name_ar": "ماتشا جوز هند (حليب)",
            "desc_en": "Earthy matcha blended with rich creamy coconut milk",
            "desc_ar": "ماتشا بحليب جوز الهند الطبيعي الكريمي",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-hot-caramel",
            "name_en": "Caramel Matcha Latte",
            "name_ar": "ماتشا لاتيه كراميل",
            "desc_en": "Matcha latte balanced with golden caramel drizzle",
            "desc_ar": "ماتشا لاتيه بصوص الكراميل الذهبي",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "iced-matcha",
        "name_en": "Iced Matcha",
        "name_ar": "ماتشا باردة",
        "desc_en": "Refreshing iced ceremonial Japanese matcha beverages",
        "desc_ar": "مشروبات ماتشا يابانية مثلجة ومنعشة بألذ النكهات",
        "items": [
          {
            "id": "matcha-ice-classic",
            "name_en": "Classic Iced Matcha",
            "name_ar": "آيس ماتشا كلاسيك",
            "desc_en": "Shaken ceremonial matcha poured over crystal ice",
            "desc_ar": "ماتشا كلاسيكية مخفوقة على الثلج",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-latte",
            "name_en": "Iced Matcha Latte",
            "name_ar": "آيس ماتشا لاتيه",
            "desc_en": "Layered matcha over cold milk and ice cubes",
            "desc_ar": "آيس ماتشا لاتيه بطبقات الحليب والثلج",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-vanilla",
            "name_en": "Vanilla Iced Matcha",
            "name_ar": "آيس ماتشا فانيليا",
            "desc_en": "Iced matcha latte with vanilla syrup",
            "desc_ar": "آيس ماتشا بنكهة الفانيليا",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-coconut",
            "name_en": "Coconut Iced Matcha",
            "name_ar": "آيس ماتشا جوز هند",
            "desc_en": "Tropical iced matcha with silky coconut milk",
            "desc_ar": "آيس ماتشا بحليب جوز الهند المنعش",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-spanish",
            "name_en": "Spanish Iced Matcha",
            "name_ar": "آيس ماتشا إسباني",
            "desc_en": "Sweet Spanish style iced matcha latte",
            "desc_ar": "آيس ماتشا إسباني بالحليب المكثف المحلى",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-mango",
            "name_en": "Mango Iced Matcha",
            "name_ar": "آيس ماتشا مانجو",
            "desc_en": "Sweet mango purée layered under cold matcha",
            "desc_ar": "آيس ماتشا مع بيوريه المانجو الطبيعي",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-strawberry",
            "name_en": "Strawberry Iced Matcha",
            "name_ar": "آيس ماتشا فراولة",
            "desc_en": "Fresh strawberry compote layered with cold milk and matcha",
            "desc_ar": "آيس ماتشا مع صوص الفراولة الطازجة",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-peach",
            "name_en": "Peach Iced Matcha",
            "name_ar": "آيس ماتشا خوخ",
            "desc_en": "Refreshing peach notes with crisp cold matcha",
            "desc_ar": "آيس ماتشا بنكهة الخوخ المنعش",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "matcha-ice-caramel",
            "name_en": "Caramel Iced Matcha",
            "name_ar": "آيس ماتشا كراميل",
            "desc_en": "Iced matcha latte with sweet caramel drizzle",
            "desc_ar": "آيس ماتشا مع صوص الكراميل",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "yogurt",
        "name_en": "Yogurt",
        "name_ar": "زبادي",
        "desc_en": "Creamy probiotic yogurt parfaits and fruit bowls",
        "desc_ar": "زبادي طبيعي كريمي مع الفواكه والعسل والمكسرات",
        "items": [
          {
            "id": "yogurt-plain",
            "name_en": "Plain Yogurt",
            "name_ar": "زبادي سادة",
            "desc_en": "Fresh creamy natural yogurt",
            "desc_ar": "زبادي بلدي طازج سادة",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-honey",
            "name_en": "Honey Yogurt",
            "name_ar": "زبادي عسل",
            "desc_en": "Creamy yogurt with pure mountain honey",
            "desc_ar": "زبادي مع عسل النحل الصافي",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-mango",
            "name_en": "Mango Yogurt",
            "name_ar": "زبادي مانجو",
            "desc_en": "Yogurt topped with diced mango and purée",
            "desc_ar": "زبادي بقطع وصوص المانجو الفريش",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-strawberry",
            "name_en": "Strawberry Yogurt",
            "name_ar": "زبادي فراولة",
            "desc_en": "Fresh strawberries layered with cold yogurt",
            "desc_ar": "زبادي بالفراولة الطازجة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-peach",
            "name_en": "Peach Yogurt",
            "name_ar": "زبادي خوخ",
            "desc_en": "Sweet peach slices with creamy yogurt",
            "desc_ar": "زبادي بقطع الخوخ اللذيذة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-passion-fruit",
            "name_en": "Passion Fruit Yogurt",
            "name_ar": "زبادي باشون فروت",
            "desc_en": "Tart tropical passion fruit over yogurt",
            "desc_ar": "زبادي بنكهة الباشون فروت الاستوائية",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-mix-berry",
            "name_en": "Mixed Berry Yogurt",
            "name_ar": "زبادي ميكس بيري",
            "desc_en": "Blueberries, raspberries and strawberries over yogurt",
            "desc_ar": "زبادي بالتوت البري المشكل",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-blueberry",
            "name_en": "Blueberry Yogurt",
            "name_ar": "زبادي بلوبيري",
            "desc_en": "Sweet blueberries with probiotic yogurt",
            "desc_ar": "زبادي مع حبات البلوبيري الغنية",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-honey-nuts",
            "name_en": "Honey & Nuts Yogurt",
            "name_ar": "زبادي (عسل - مكسرات)",
            "desc_en": "Roasted almonds and walnuts with honey on yogurt",
            "desc_ar": "زبادي بالعسل والمكسرات المحمصة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-special",
            "name_en": "Special Yogurt Parfait",
            "name_ar": "زبادي إسبيشيال",
            "desc_en": "Fresh fruits, natural honey, roasted nuts and whipped cream",
            "desc_ar": "فواكه - عسل - مكسرات - كريمة",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "yogurt-laguna",
            "name_en": "Signature Laguna Yogurt",
            "name_ar": "زبادي لاجونا",
            "desc_en": "Chef special yogurt bowl loaded with exotic berries, honey and crunch",
            "desc_ar": "طبق زبادي لاجونا الخاص بتشكيلة الفواكه والعسل الفاخر",
            "price": 90,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "milkshake",
        "name_en": "Milkshake",
        "name_ar": "ميلك شيك",
        "desc_en": "Thick creamy milkshakes whipped with premium ice cream",
        "desc_ar": "ميلك شيك كثيف كريمي محضر من أجود أنواع الآيس كريم",
        "items": [
          {
            "id": "shake-vanilla",
            "name_en": "Vanilla Shake",
            "name_ar": "فانيليا",
            "desc_en": "Classic creamy Madagascar vanilla shake",
            "desc_ar": "ميلك شيك فانيليا كلاسيك",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-pistachio",
            "name_en": "Pistachio Shake",
            "name_ar": "بيستاشيو",
            "desc_en": "Authentic pistachio cream shake with nuts",
            "desc_ar": "ميلك شيك الفستق الحلبي الفاخر",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-chocolate",
            "name_en": "Chocolate Shake",
            "name_ar": "شوكولاتة",
            "desc_en": "Rich Belgian chocolate ice cream shake",
            "desc_ar": "ميلك شيك شوكولاتة غني",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-caramel",
            "name_en": "Caramel Shake",
            "name_ar": "كراميل",
            "desc_en": "Salted butter caramel milkshake",
            "desc_ar": "ميلك شيك صوص الكراميل الناعم",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-hazelnut",
            "name_en": "Hazelnut Shake",
            "name_ar": "بندق",
            "desc_en": "Roasted hazelnut and vanilla cream",
            "desc_ar": "ميلك شيك بنكهة البندق المحمص",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-oreo",
            "name_en": "Oreo Shake",
            "name_ar": "أوريو",
            "desc_en": "Crushed Oreo cookies blended in thick shake",
            "desc_ar": "ميلك شيك بسكويت الأوريو والكريمة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-lotus",
            "name_en": "Lotus Shake",
            "name_ar": "لوتس",
            "desc_en": "Lotus Biscoff cream and crunchy speculoos",
            "desc_ar": "ميلك شيك زبدة اللوتس الشهيرة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-kinder",
            "name_en": "Kinder Shake",
            "name_ar": "كندر",
            "desc_en": "Smooth Kinder chocolate milkshake",
            "desc_ar": "ميلك شيك شوكولاتة كندر الأصلية",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-hohos",
            "name_en": "HoHos Shake",
            "name_ar": "هوهوز",
            "desc_en": "HoHos chocolate roll cake blended in shake",
            "desc_ar": "ميلك شيك كيكة هوهوز بالشوكولاتة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-nutella",
            "name_en": "Nutella Shake",
            "name_ar": "نوتيلا",
            "desc_en": "Generous spoonfuls of Nutella whipped in milkshake",
            "desc_ar": "ميلك شيك شوكولاتة النوتيلا الغنية",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-cookies",
            "name_en": "Cookies Shake",
            "name_ar": "كوكيز",
            "desc_en": "Chocolate chip cookies blended with vanilla cream",
            "desc_ar": "ميلك شيك كوكيز بالشوكولاتة تشيبس",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-passion",
            "name_en": "Passion Fruit Shake",
            "name_ar": "باشون فروت",
            "desc_en": "Tropical passion fruit and vanilla ice cream",
            "desc_ar": "ميلك شيك باشون فروت منعش",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-peach",
            "name_en": "Peach Shake",
            "name_ar": "خوخ",
            "desc_en": "Sweet peach blended with creamy milk",
            "desc_ar": "ميلك شيك خوخ طبيعي ولذيذ",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-strawberry",
            "name_en": "Strawberry Shake",
            "name_ar": "فراولة",
            "desc_en": "Fresh ripe strawberries with vanilla ice cream",
            "desc_ar": "ميلك شيك فراولة طازجة وكريمة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-blueberry",
            "name_en": "Blueberry Shake",
            "name_ar": "بلوبيري",
            "desc_en": "Wild blueberries blended with ice cream",
            "desc_ar": "ميلك شيك بلوبيري مميز",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-kiwi",
            "name_en": "Kiwi Shake",
            "name_ar": "كيوي",
            "desc_en": "Zesty kiwi and sweet cream blend",
            "desc_ar": "ميلك شيك كيوي فريش",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-mango",
            "name_en": "Mango Shake",
            "name_ar": "مانجو",
            "desc_en": "Rich Alphonso mango pulp milkshake",
            "desc_ar": "ميلك شيك مانجو كريمي استوائي",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-mix-berry",
            "name_en": "Mixed Berry Shake",
            "name_ar": "ميكس بيري",
            "desc_en": "Raspberry, strawberry and blueberry trio",
            "desc_ar": "ميلك شيك توت مشكل غني",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-pineapple",
            "name_en": "Pineapple Shake",
            "name_ar": "أناناس",
            "desc_en": "Golden pineapple blended with ice cream",
            "desc_ar": "ميلك شيك أناناس مثلج",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-green-apple",
            "name_en": "Green Apple Shake",
            "name_ar": "تفاح أخضر",
            "desc_en": "Crisp green apple and vanilla shake",
            "desc_ar": "ميلك شيك تفاح أخضر منعش",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "shake-laguna",
            "name_en": "Signature Laguna Shake",
            "name_ar": "لاجونا",
            "desc_en": "Laguna signature blend of premium chocolates, nuts, and waffle garnish",
            "desc_ar": "ميلك شيك لاجونا الملكي بالمكسرات والصوصات الفاخرة",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "soda-mojito",
        "name_en": "Soda Mojito",
        "name_ar": "موهيتو الصودا",
        "desc_en": "Sparkling sodas with fresh lime, mint leaves and crushed crystal ice",
        "desc_ar": "موهيتو الصودا المنعش مع شرائح الليمون والنعناع والثلج المجروش",
        "items": [
          {
            "id": "mojito-classic",
            "name_en": "Classic Lime Mojito",
            "name_ar": "كلاسيك",
            "desc_en": "Fresh lime, soda, mint, crushed ice, lemon slices",
            "desc_ar": "ليمون - صودا - نعناع - تلج - شرائح ليمون",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-passion",
            "name_en": "Passion Fruit Mojito",
            "name_ar": "باشون",
            "desc_en": "Passion fruit purée, soda, lime slices, crushed ice",
            "desc_ar": "باشون - صودا - شرائح ليمون - تلج",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-blueberry",
            "name_en": "Blueberry Mojito",
            "name_ar": "بلوبيري",
            "desc_en": "Blueberry syrup, soda, fresh lime slices, crushed ice",
            "desc_ar": "بلوبيري - صودا - شرائح ليمون - تلج",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-mix-berry",
            "name_en": "Mixed Berry Mojito",
            "name_ar": "ميكس بيري",
            "desc_en": "Mixed forest berries, soda, lime, ice",
            "desc_ar": "ميكس بيري - صودا - شرائح ليمون - تلج",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-peach",
            "name_en": "Peach Mojito",
            "name_ar": "خوخ",
            "desc_en": "Sweet peach syrup, soda, lemon slices",
            "desc_ar": "خوخ - صودا - شرائح ليمون",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-strawberry",
            "name_en": "Strawberry Mojito",
            "name_ar": "فراولة",
            "desc_en": "Strawberry purée, soda, lime slices, crushed ice",
            "desc_ar": "فراولة - صودا - شرائح ليمون - تلج",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-redbull",
            "name_en": "Red Bull Mojito",
            "name_ar": "ريد بول موهيتو",
            "desc_en": "Energy Red Bull can, fresh mint, lemon",
            "desc_ar": "ريد بول - نعناع - ليمون",
            "price": 110,
            "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-sunrise",
            "name_en": "Sunrise Mojito",
            "name_ar": "صن رايز",
            "desc_en": "Orange, soda, lemon, and pomegranate grenadine",
            "desc_ar": "برتقال - صودا - ليمون - رمان",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-sunshine",
            "name_en": "Sunshine Mojito",
            "name_ar": "صن شاين",
            "desc_en": "Citrus orange, sparkling soda, lemon, pomegranate",
            "desc_ar": "برتقال - صودا - ليمون - رمان",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-redbull-berry",
            "name_en": "Red Bull Berry",
            "name_ar": "ريد بول بيري",
            "desc_en": "Red Bull energy with wild berries, lime slices, crushed ice",
            "desc_ar": "ريد بول - بيري - شرائح ليمون - تلج",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-blue-sky",
            "name_en": "Blue Sky",
            "name_ar": "بلو سكاي",
            "desc_en": "Espresso, Red Bull, sparkling soda, fresh mint",
            "desc_ar": "إسبريسو - ريد بول - صودا - نعناع",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "mojito-laguna",
            "name_en": "Signature Laguna Mojito",
            "name_ar": "موهيتو لاجونا",
            "desc_en": "Fresh orange, espresso shot, sparkling soda, crushed ice",
            "desc_ar": "برتقال - إسبريسو - صودا - تلج",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "iced-tea",
        "name_en": "Iced Tea",
        "name_ar": "الشاي المثلج",
        "desc_en": "Cold brewed chilled tea with fruit essences",
        "desc_ar": "شاي مثلج منعش بنكهات الفواكه الصيفية",
        "items": [
          {
            "id": "ice-tea-classic",
            "name_en": "Classic Iced Tea",
            "name_ar": "آيس تي",
            "desc_en": "Traditional brewed black tea served over crystal ice",
            "desc_ar": "شاي مثلج كلاسيكي مع شرائح الليمون",
            "price": 50,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-tea-peach",
            "name_en": "Peach Iced Tea",
            "name_ar": "آيس تي خوخ",
            "desc_en": "Iced black tea infused with sweet summer peach",
            "desc_ar": "شاي مثلج بنكهة الخوخ اللذيذ",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-tea-passion",
            "name_en": "Passion Fruit Iced Tea",
            "name_ar": "آيس تي باشون فروت",
            "desc_en": "Tropical passion fruit chilled tea",
            "desc_ar": "شاي مثلج بنكهة الباشون فروت",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-tea-strawberry",
            "name_en": "Strawberry Iced Tea",
            "name_ar": "آيس تي فراولة",
            "desc_en": "Ripe strawberry essence in cold tea",
            "desc_ar": "شاي مثلج بنكهة الفراولة",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-tea-mango",
            "name_en": "Mango Iced Tea",
            "name_ar": "آيس تي مانجو",
            "desc_en": "Golden mango purée blended with chilled tea",
            "desc_ar": "شاي مثلج بنكهة المانجو",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-tea-lemon-mint",
            "name_en": "Lemon Mint Iced Tea",
            "name_ar": "آيس تي ليمون نعناع",
            "desc_en": "Crisp lemon and fresh garden mint in iced tea",
            "desc_ar": "شاي مثلج بالليمون والنعناع المنعش",
            "price": 60,
            "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "iced-coffee",
        "name_en": "Iced Coffee",
        "name_ar": "قهوة مثلجة",
        "desc_en": "Chilled espresso drinks and cold brew specialties",
        "desc_ar": "مشروبات قهوة مثلجة منعشة محضرة من أجود حبوب الإسبريسو",
        "items": [
          {
            "id": "ice-coffee-classic",
            "name_en": "Classic Iced Coffee",
            "name_ar": "آيس كوفي",
            "desc_en": "Double espresso pulled over cold water and ice",
            "desc_ar": "قهوة إسبريسو مثلجة منعشة",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-latte",
            "name_en": "Iced Latte",
            "name_ar": "آيس لاتيه",
            "desc_en": "Espresso with cold whole milk over ice",
            "desc_ar": "إسبريسو مع حليب بارد وثلج",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-spanish-latte",
            "name_en": "Iced Spanish Latte",
            "name_ar": "آيس إسبانيش لاتيه",
            "desc_en": "Sweet condensed milk, cold milk, and rich espresso over ice",
            "desc_ar": "آيس لاتيه إسباني بالحليب المكثف المحلى",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-caramel-macchiato",
            "name_en": "Iced Caramel Macchiato",
            "name_ar": "آيس كراميل ماكياتو",
            "desc_en": "Vanilla milk, espresso, and golden caramel sauce over ice",
            "desc_ar": "آيس كراميل ماكياتو بطبقات الحليب والكراميل",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-toffee-nut",
            "name_en": "Iced Toffee Nut",
            "name_ar": "آيس تافي نات",
            "desc_en": "Toffee nut syrup, cold espresso, and milk",
            "desc_ar": "قهوة مثلجة بنكهة التوفي نات والمكسرات",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-mocha-dark",
            "name_en": "Iced Dark Mocha",
            "name_ar": "آيس موكا دارك",
            "desc_en": "Dark chocolate sauce, cold espresso, and milk",
            "desc_ar": "آيس موكا بالشوكولاتة الداكنة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-lotus-coffee",
            "name_en": "Iced Lotus Coffee",
            "name_ar": "آيس لوتس",
            "desc_en": "Lotus Biscoff cream, cold espresso, and milk",
            "desc_ar": "قهوة مثلجة بكريمة وبسكويت اللوتس",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-mocha-white",
            "name_en": "Iced White Mocha",
            "name_ar": "آيس موكا وايت",
            "desc_en": "White chocolate, chilled espresso, and milk",
            "desc_ar": "آيس موكا بالشوكولاتة البيضاء",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "ice-pistachio-coffee",
            "name_en": "Iced Pistachio Coffee",
            "name_ar": "آيس بيستاشيو كوفي",
            "desc_en": "Pistachio cream, cold espresso, and milk",
            "desc_ar": "قهوة مثلجة بصوص الفستق الحلبي",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "latte-gold-banana",
            "name_en": "Gold Banana Latte",
            "name_ar": "لاتيه جولد الموز",
            "desc_en": "Banana cream, espresso, and golden caramel swirl",
            "desc_ar": "لاتيه جولد الموز الفاخر بلمسة كراميل",
            "price": 95,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "frappe",
        "name_en": "Frappé",
        "name_ar": "فرابيه",
        "desc_en": "Blended ice drinks with rich cream and flavored drizzles",
        "desc_ar": "مشروبات فرابيه مخفوقة بالثلج والكريمة الغنية",
        "items": [
          {
            "id": "frappe-vanilla",
            "name_en": "Vanilla Frappé",
            "name_ar": "فانيليا",
            "desc_en": "Blended vanilla cream frappé",
            "desc_ar": "فرابيه فانيليا ناعم مع الكريمة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-chocolate",
            "name_en": "Chocolate Frappé",
            "name_ar": "شوكوليت",
            "desc_en": "Rich blended chocolate ice frappé",
            "desc_ar": "فرابيه شوكولاتة مثلج غني",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-caramel",
            "name_en": "Caramel Frappé",
            "name_ar": "كراميل",
            "desc_en": "Caramel sauce blended with cold cream and ice",
            "desc_ar": "فرابيه كراميل بالكريمة المخفوقة",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-nutella",
            "name_en": "Nutella Frappé",
            "name_ar": "نوتيلا",
            "desc_en": "Blended Nutella hazelnut cream frappé",
            "desc_ar": "فرابيه نوتيلا بالشوكولاتة والبندق",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-mocha",
            "name_en": "Mocha Frappé",
            "name_ar": "موكا",
            "desc_en": "Espresso and chocolate blended frappé",
            "desc_ar": "فرابيه موكا بالإسبريسو والشوكولاتة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-hazelnut",
            "name_en": "Hazelnut Frappé",
            "name_ar": "بندق",
            "desc_en": "Roasted hazelnut syrup and blended cream",
            "desc_ar": "فرابيه بنكهة البندق المحمص",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-pistachio",
            "name_en": "Pistachio Frappé",
            "name_ar": "بيستاشيو",
            "desc_en": "Blended pistachio cream with pistachio dust",
            "desc_ar": "فرابيه الفستق الحلبي الملكي",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-cookies",
            "name_en": "Cookies Frappé",
            "name_ar": "كوكيز",
            "desc_en": "Chocolate cookies blended with ice and cream",
            "desc_ar": "فرابيه كوكيز مع قطع الشوكولاتة المقرمشة",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-laguna",
            "name_en": "Signature Laguna Frappé",
            "name_ar": "لاجونا",
            "desc_en": "Laguna signature blend of coffee, chocolate and nuts",
            "desc_ar": "فرابيه لاجونا الخاص بالشوكولاتة والمكسرات الفاخرة",
            "price": 110,
            "isLagunaSpecial": true,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "frappe-kinder",
            "name_en": "Kinder Frappé",
            "name_ar": "كندر",
            "desc_en": "Blended Kinder chocolate with sweet cream",
            "desc_ar": "فرابيه شوكولاتة كندر الأصلية",
            "price": 90,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        "id": "smoothies",
        "name_en": "Smoothies",
        "name_ar": "سموذي",
        "desc_en": "Thick ice-blended real fruit smoothies",
        "desc_ar": "سموذي فواكه طبيعية مخفوقة مع الثلج المنعش",
        "items": [
          {
            "id": "smoothie-pina-colada",
            "name_en": "Piña Colada Smoothie",
            "name_ar": "بينا كولا",
            "desc_en": "Pineapple and coconut cream blended with ice",
            "desc_ar": "أناناس وجوز هند مثلج استوائي",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-blueberry",
            "name_en": "Blueberry Smoothie",
            "name_ar": "بلوبيري",
            "desc_en": "Real blueberries crushed with ice",
            "desc_ar": "سموذي بلوبيري طبيعي منعش",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-mix-berry",
            "name_en": "Mixed Berry Smoothie",
            "name_ar": "ميكس بيري",
            "desc_en": "Strawberry, blueberry and raspberry blend",
            "desc_ar": "سموذي التوت البري المشكل",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-passion",
            "name_en": "Passion Fruit Smoothie",
            "name_ar": "باشون فروت",
            "desc_en": "Tropical passion fruit slush smoothie",
            "desc_ar": "سموذي باشون فروت حامض وحلو",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-passion-lemon",
            "name_en": "Passion Lemon Smoothie",
            "name_ar": "باشون ليمون",
            "desc_en": "Passion fruit and fresh lemon blended with ice",
            "desc_ar": "سموذي باشون مع ليمون فريش",
            "price": 75,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-mango",
            "name_en": "Mango Smoothie",
            "name_ar": "مانجو",
            "desc_en": "Sweet mango fruit smoothie",
            "desc_ar": "سموذي مانجو طبيعي مثلج",
            "price": 80,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-peach",
            "name_en": "Peach Smoothie",
            "name_ar": "خوخ",
            "desc_en": "Summer peach purée blended with ice",
            "desc_ar": "سموذي خوخ منعش",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-lemon-mint",
            "name_en": "Lemon Mint Smoothie",
            "name_ar": "ليمون نعناع",
            "desc_en": "Fresh lemon juice and mint leaves ice slush",
            "desc_ar": "سموذي ليمون ونعناع مثلج",
            "price": 65,
            "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-watermelon",
            "name_en": "Watermelon Smoothie",
            "name_ar": "بطيخ",
            "desc_en": "Juicy sweet watermelon blended over ice",
            "desc_ar": "سموذي بطيخ طبيعي منعش",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-strawberry",
            "name_en": "Strawberry Smoothie",
            "name_ar": "فراولة",
            "desc_en": "Fresh strawberries blended with crushed ice",
            "desc_ar": "سموذي فراولة طازجة",
            "price": 70,
            "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
          },
          {
            "id": "smoothie-pineapple-passion",
            "name_en": "Pineapple Passion Smoothie",
            "name_ar": "أناناس باشون",
            "desc_en": "Golden pineapple and passion fruit tropical slush",
            "desc_ar": "سموذي أناناس مع باشون فروت",
            "price": 85,
            "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
          }
        ]
      }
    ]
  }
];
