import { useState } from "react";

const shapes = [
  {
    name: "American Beauty",
    year: "1899",
    era: "Victorian",
    category: "Early Classic",
    collectibility: "Moderate",
    color: "#c9a96e",
    description: "One of HLC's earliest successes. Scalloped edges, embossed florals, often gold-trimmed. True antique territory.",
    notes: "Predates Fiesta by nearly 40 years.",
    searchQuery: "Homer Laughlin American Beauty vintage china dinnerware",
    imageUrl: "https://i.etsystatic.com/isla/5ebf81/42635975/isla_fullxfull.42635975_rktgq3vb.jpg"
  },
  {
    name: "Americana",
    year: "c.1940s",
    era: "Mid-Century",
    category: "Illustrated",
    collectibility: "Moderate",
    color: "#4a6fa5",
    description: "Features classic American scenes. Popular during and after WWII when American-made goods carried special meaning.",
    notes: "Crosses over with Americana décor collectors.",
    searchQuery: "Homer Laughlin Americana dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/6935898/r/il/7d4e8e/4657398773/il_fullxfull.4657398773_3yf2.jpg"
  },
  {
    name: "Angelus",
    year: "1907",
    era: "Edwardian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#8a7968",
    description: "Edwardian-era shape with delicate embossed detailing and graceful curves. Named after the evening prayer bell.",
    notes: "Rare to find complete sets. Usually sold individually.",
    searchQuery: "Homer Laughlin Angelus 1907 dinnerware shape edwardian",
    imageUrl: "https://www.laurelhollowpark.net/hlc/angelus-plate.jpg"
  },
  {
    name: "Art China",
    year: "c.1920s–30s",
    era: "Arts & Crafts / Art Deco",
    category: "Decorative",
    collectibility: "Higher",
    color: "#7a5c3e",
    description: "Specialty line with hand-painted or detailed decal artwork — scenic, botanical, or figural subjects. Made to be displayed as well as used.",
    notes: "Value depends heavily on the specific subject matter depicted.",
    searchQuery: "Homer Laughlin Art China decorated vintage scenic plates",
    imageUrl: "https://i.etsystatic.com/8166091/r/il/fa2297/4318823067/il_fullxfull.4318823067_4yzv.jpg"
  },
  {
    name: "Brittany",
    year: "1936",
    era: "Art Deco",
    category: "Eggshell Family",
    collectibility: "Moderate–High",
    color: "#6b8f71",
    description: "Graceful Art Deco shape, European-influenced. Part of the Eggshell family — thin, lightweight, refined. Produced with numerous decal treatments.",
    notes: "Often mistaken for other Eggshell lines. Always check the backstamp.",
    searchQuery: "Homer Laughlin Brittany eggshell dinnerware art deco shape",
    imageUrl: "https://drvintagedinnerware.com/wp-content/uploads/2019/11/brittany-1.jpg"
  },
  {
    name: "Carnival",
    year: "1938",
    era: "Art Deco",
    category: "Solid Color",
    collectibility: "Moderate",
    color: "#d4a843",
    description: "Cheerful, rounded shape in bright solid glazes — a festive, affordable Fiesta alternative. Often found in yellow, green, and cobalt.",
    notes: "Easily confused with Harlequin. Similar price point and era.",
    searchQuery: "Homer Laughlin Carnival solid color dinnerware 1938 vintage",
    imageUrl: "https://i.pinimg.com/originals/7f/3d/fc/7f3dfc3b4e8c5e7f5d3f5c8e9b4e1a2d.jpg"
  },
  {
    name: "Cavalier",
    year: "c.1950s",
    era: "Mid-Century Modern",
    category: "Eggshell Family",
    collectibility: "Moderate",
    color: "#9b7b9a",
    description: "Mid-century Eggshell shape with cleaner, more modern lines. Produced with many 1950s floral and scenic decal treatments.",
    notes: "Persian Garden is the most sought-after Cavalier treatment.",
    searchQuery: "Homer Laughlin Cavalier Persian Garden chinaware 1950s",
    imageUrl: "https://i.etsystatic.com/29338561/r/il/e8a0cc/3568898497/il_fullxfull.3568898497_m5en.jpg"
  },
  {
    name: "Century / Riviera",
    year: "1931 / 1938",
    era: "Art Deco",
    category: "Solid Color",
    collectibility: "High",
    color: "#c25b3f",
    description: "Century is the square-edged shape; Riviera adds distinctive triple-scalloped corners. Made in bright solid glazes. Riviera production ended ~1948.",
    notes: "Square shapes are immediately identifiable. Red Riviera is especially prized.",
    searchQuery: "Homer Laughlin Riviera Century square plate solid color vintage",
    imageUrl: "https://i.etsystatic.com/22007234/r/il/3e3fc5/2944199537/il_fullxfull.2944199537_gpmd.jpg"
  },
  {
    name: "Colonial",
    year: "1901",
    era: "Victorian–Edwardian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#8b7355",
    description: "Early shape with dignified, restrained embossing. A staple hotel and restaurant shape in its day. Over 100 pieces in the line.",
    notes: "More common in institutional than domestic settings originally.",
    searchQuery: "Homer Laughlin Colonial shape 1901 dinnerware vintage china",
    imageUrl: "https://i.etsystatic.com/isla/63e3b7/28938742/isla_fullxfull.28938742_fvhm.jpg"
  },
  {
    name: "Coronet",
    year: "1935",
    era: "Depression Era",
    category: "Transitional",
    collectibility: "Moderate",
    color: "#b5956e",
    description: "Bridges Victorian ornamentation and Art Deco streamlining. Introduced just before Fiesta, reflecting HLC's evolving design sensibility.",
    notes: "Often overlooked by collectors focused on Fiesta. Good for budget collecting.",
    searchQuery: "Homer Laughlin Coronet shape 1935 dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/c1b0ef/4060453949/il_fullxfull.4060453949_4nv4.jpg"
  },
  {
    name: "Debutante",
    year: "1948",
    era: "Post-War",
    category: "Post-War Line",
    collectibility: "Moderate",
    color: "#c8afc0",
    description: "Part of HLC's 1948 pastel-era launch alongside Jubilee, Skytone, and Suntone. Soft shapes in muted solid glazes — a gentler alternative to bold pre-war colors.",
    notes: "Pairs well with Jubilee. Same era and aesthetic.",
    searchQuery: "Homer Laughlin Debutante dinnerware pastel 1948 vintage",
    imageUrl: "https://www.laurelhollowpark.net/hlc/debutante-plate.jpg"
  },
  {
    name: "Duraprint",
    year: "c.1950s",
    era: "Mid-Century",
    category: "Commercial",
    collectibility: "Lower",
    color: "#7a8a7a",
    description: "Durable commercial line with printed decoration. Designed for institutional use with enough domestic appeal for retail sale.",
    notes: "More of a curiosity than a collector focus. Solid for completists.",
    searchQuery: "Homer Laughlin Duraprint commercial dinnerware 1950s",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/fad5e9/3198273601/il_fullxfull.3198273601_gh3s.jpg"
  },
  {
    name: "Eggshell Georgian",
    year: "1937",
    era: "Pre-War",
    category: "Eggshell Family",
    collectibility: "High",
    color: "#c9b99a",
    description: "Lightweight shape with dash-dot embossed rim referencing Georgian architecture. Refined ivory body. Sold at Sears and Montgomery Ward. Hundreds of decal treatments exist.",
    notes: "Cashmere, Countess, and Fieldcrest are the most popular treatments.",
    searchQuery: "Homer Laughlin Eggshell Georgian dinnerware vintage Cashmere Countess",
    imageUrl: "https://i.etsystatic.com/14034548/r/il/0fa28e/4618534247/il_fullxfull.4618534247_mx6j.jpg"
  },
  {
    name: "Eggshell Nautilus",
    year: "1937",
    era: "Pre-War",
    category: "Eggshell Family",
    collectibility: "High",
    color: "#e8dcc8",
    description: "Ultra-thin walls with shell-inspired swirling embossed rim. Featherlight and delicate. Produced with many floral decals including the beloved Apple Blossom.",
    notes: "Apple Blossom and Pastel Tulip are the most collectible treatments.",
    searchQuery: "Homer Laughlin Eggshell Nautilus Apple Blossom dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/13386819/r/il/c1a6a4/4418297695/il_fullxfull.4418297695_4i3v.jpg"
  },
  {
    name: "Empress",
    year: "1907",
    era: "Edwardian",
    category: "Early Classic",
    collectibility: "Lower–Moderate",
    color: "#7a5c8a",
    description: "Commanding, formal Edwardian shape. Deep fluted edges and refined proportions suited to formal dining. Named to evoke imperial elegance.",
    notes: "Rare. A true antique collector's piece.",
    searchQuery: "Homer Laughlin Empress 1907 edwardian shape vintage china",
    imageUrl: "https://i.etsystatic.com/isla/e77e86/27041088/isla_fullxfull.27041088_7jf1.jpg"
  },
  {
    name: "Epicure",
    year: "1955",
    era: "Mid-Century Modern",
    category: "Specialty",
    collectibility: "Very High",
    color: "#5b8fa8",
    description: "Designed by a student of Russel Wright. Produced in four muted solid colors: charcoal, dawn pink, turquoise, and white. Discontinued after just one year — a commercial failure, now a collector treasure.",
    notes: "One of the most sought-after HLC lines. Turquoise commands a premium.",
    searchQuery: "Homer Laughlin Epicure turquoise charcoal dinnerware 1955 MCM",
    imageUrl: "https://i.etsystatic.com/8262584/r/il/ca5a87/4647768009/il_fullxfull.4647768009_7ybi.jpg"
  },
  {
    name: "Fiesta – Contemporary",
    year: "1986–present",
    era: "Post-Revival",
    category: "Fiesta",
    collectibility: "Growing",
    color: "#c03a2b",
    description: "The modern reintroduction. Lead-free, dishwasher and microwave safe. Retains signature concentric rings with updated seasonal colors. Over 40 colors produced since 1986.",
    notes: "Retired colors (Juniper, Persimmon, Lilac) are increasingly collectible.",
    searchQuery: "Fiesta dinnerware contemporary Homer Laughlin modern colors collection",
    imageUrl: "https://images.fiestafactorydirect.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/f/fff_coll_hero.jpg"
  },
  {
    name: "Fiesta – Vintage",
    year: "1936–1973",
    era: "Art Deco / Mid-Century",
    category: "Fiesta",
    collectibility: "Very High",
    color: "#e8a020",
    description: "The original. Designed by Frederick Hurten Rhead with bold concentric rings and vibrant glazes. Original colors: red (radioactive!), cobalt, ivory, yellow, green, and later turquoise, rose, chartreuse, gray, dark green, medium green.",
    notes: "Original red contains uranium oxide. Dark green and medium green are the rarest vintage colors.",
    searchQuery: "vintage Fiesta Homer Laughlin original colors cobalt red yellow dinnerware",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fiestaware_color_chart.jpg/800px-Fiestaware_color_chart.jpg"
  },
  {
    name: "Fiestaware 2000",
    year: "c.2000s",
    era: "Contemporary",
    category: "Fiesta",
    collectibility: "Moderate",
    color: "#d4763b",
    description: "Millennium-era special releases and collector editions of Fiesta. Includes limited colorways and sets produced to mark the new century.",
    notes: "True collectors tend to focus on vintage or retirement-era colors.",
    searchQuery: "Fiestaware 2000 millennium collector edition Homer Laughlin",
    imageUrl: "https://i.etsystatic.com/6935898/r/il/5bff4e/4687424557/il_fullxfull.4687424557_rxok.jpg"
  },
  {
    name: "Genesee",
    year: "1912",
    era: "Edwardian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#7a8c6e",
    description: "Hotel and domestic shape from the Edwardian era. Named after the Genesee River. Elegant proportions with modest embossing.",
    notes: "Primarily of interest to historians and completist HLC collectors.",
    searchQuery: "Homer Laughlin Genesee 1912 dinnerware edwardian shape",
    imageUrl: "https://i.etsystatic.com/isla/4db21a/35467329/isla_fullxfull.35467329_dg0k.jpg"
  },
  {
    name: "Golden Gate",
    year: "1896",
    era: "Victorian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#c9a535",
    description: "One of HLC's first named shapes, introduced 1896. Victorian styling with embossed borders. A piece of genuine American ceramics history — over 125 years old.",
    notes: "True antiques; value is in rarity and age rather than collector demand.",
    searchQuery: "Homer Laughlin Golden Gate 1896 Victorian china antique",
    imageUrl: "https://i.etsystatic.com/8166091/r/il/d4c2a8/2788473487/il_fullxfull.2788473487_npq2.jpg"
  },
  {
    name: "Harlequin",
    year: "1938–1964",
    era: "Art Deco / Mid-Century",
    category: "Solid Color",
    collectibility: "High",
    color: "#6d8b74",
    description: "HLC's Fiesta sibling, made exclusively for Woolworth's. Shares the solid-glaze philosophy but with angular, streamlined shape and no rings. Produced in spruce green, maroon, mauve blue, rose, turquoise, yellow, chartreuse, gray, and more.",
    notes: "Maroon and spruce green are the rarest colors. Medium green is exceptionally rare.",
    searchQuery: "Homer Laughlin Harlequin Woolworths solid color vintage dinnerware",
    imageUrl: "https://i.etsystatic.com/22007234/r/il/44b9b2/4694027901/il_fullxfull.4694027901_4e2p.jpg"
  },
  {
    name: "Hudson",
    year: "1912",
    era: "Edwardian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#6a7d8f",
    description: "Practical, well-proportioned Edwardian shape named after the Hudson River. Widely used in hotels and restaurants. A workhorse shape with many decal treatments.",
    notes: "Institutional origins limit collector enthusiasm, but individual decorated pieces can be lovely.",
    searchQuery: "Homer Laughlin Hudson shape edwardian 1912 dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/isla/7b6c3e/32941047/isla_fullxfull.32941047_mv2j.jpg"
  },
  {
    name: "Jade",
    year: "1930",
    era: "Depression Era",
    category: "Depression Era",
    collectibility: "Moderate",
    color: "#4a8b6e",
    description: "Early 1930s shape with subtle Art Deco sensibility. Named for the green glaze commonly used. Part of HLC's transitional designs moving from Victorian ornamentation.",
    notes: "Often found with floral decals rather than solid glaze.",
    searchQuery: "Homer Laughlin Jade 1930 depression era green glaze dinnerware",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/59d4a1/3786345672/il_fullxfull.3786345672_jn4d.jpg"
  },
  {
    name: "Jubilee",
    year: "1948",
    era: "Post-War",
    category: "Post-War Line",
    collectibility: "Moderate",
    color: "#a8c4b0",
    description: "Soft, rounded post-war shape in four muted solid glazes: celadon green, cream beige, mist gray, and shell pink. Clean and understated. Launched alongside Debutante, Skytone, and Suntone.",
    notes: "Shell pink is the most sought-after color. Great gateway line for new collectors.",
    searchQuery: "Homer Laughlin Jubilee 1948 pastel dinnerware shell pink vintage",
    imageUrl: "https://i.etsystatic.com/21571327/r/il/6e65b5/3959820367/il_fullxfull.3959820367_n5k1.jpg"
  },
  {
    name: "Kitchen Kraft",
    year: "1939",
    era: "Pre-War",
    category: "Bakeware / Kitchen",
    collectibility: "Very High",
    color: "#9b3a2a",
    description: "HLC's kitchen and baking pieces made in Fiesta glazes — covered casseroles, mixing bowls, pie plates, cake plates, covered jars. A functional complement to Fiesta table sets.",
    notes: "Rarer than standard Fiesta. Covered items with intact lids command serious premiums.",
    searchQuery: "Homer Laughlin Kitchen Kraft casserole Fiesta colors bakeware vintage",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/4c95f8/4059263145/il_fullxfull.4059263145_t3t9.jpg"
  },
  {
    name: "Kwaker",
    year: "1920",
    era: "1920s",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#a09080",
    description: "Plain, utilitarian 1920s shape. Simple and straightforward, produced primarily for everyday institutional and domestic use without decorative embossing.",
    notes: "Gap-filler for completists. Not a major collector focus.",
    searchQuery: "Homer Laughlin Kwaker 1920s plain dinnerware shape vintage",
    imageUrl: "https://i.etsystatic.com/isla/5bcd2f/26398154/isla_fullxfull.26398154_g5ad.jpg"
  },
  {
    name: "Liberty",
    year: "1929 / 1942",
    era: "Pre-War / WWII",
    category: "Illustrated / Patriotic",
    collectibility: "Moderate",
    color: "#8a7a5e",
    description: "A 1942 Woolworth's exclusive shape featuring patriotic American scenes reproduced from Joseph Boggs Beale paintings. Named to reflect the patriotic theme.",
    notes: "Distinct from the 1929 Liberty shape — both exist. The illustrated version is more collectible.",
    searchQuery: "Homer Laughlin Liberty Beale patriotic dinnerware Woolworths vintage",
    imageUrl: "https://i.etsystatic.com/isla/3a24f5/29401928/isla_fullxfull.29401928_n8cl.jpg"
  },
  {
    name: "Marigold",
    year: "c.1930",
    era: "Depression Era",
    category: "Depression Era",
    collectibility: "Lower–Moderate",
    color: "#d4a020",
    description: "Early 1930s shape featuring floral embossed marigold motifs. Depression-era domestic china. Usually found with decal treatments.",
    notes: "Often overlooked but genuinely charming pieces available at low prices.",
    searchQuery: "Homer Laughlin Marigold 1930 depression era dinnerware vintage floral",
    imageUrl: "https://i.etsystatic.com/isla/d2a12e/31783449/isla_fullxfull.31783449_5l4n.jpg"
  },
  {
    name: "Modern Farmer",
    year: "c.1940s–50s",
    era: "Mid-Century",
    category: "Illustrated",
    collectibility: "Moderate",
    color: "#8b6914",
    description: "Features farm and rural American scenes — roosters, barns, pastoral motifs. Part of the mid-century Americana collecting genre that aligns with farmhouse-style décor.",
    notes: "Crosses over with farm décor collectors, giving it a wider audience.",
    searchQuery: "Homer Laughlin Modern Farmer rooster dinnerware farmhouse vintage",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/a8a1e8/3867272483/il_fullxfull.3867272483_8ivx.jpg"
  },
  {
    name: "Nautilus",
    year: "c.1930s",
    era: "Depression / Pre-War",
    category: "Shell Shape",
    collectibility: "Moderate",
    color: "#c8b090",
    description: "The original Nautilus shape (not Eggshell) with its distinctive shell-swirl embossed rim. Heavier body than the Eggshell version. Produced with a wide variety of floral decals.",
    notes: "Distinguish from Eggshell Nautilus by weight — regular is noticeably heavier.",
    searchQuery: "Homer Laughlin Nautilus regular shell shape 1930s floral decal china",
    imageUrl: "https://i.etsystatic.com/8166091/r/il/7d3c9f/4318822893/il_fullxfull.4318822893_rn4k.jpg"
  },
  {
    name: "Newell",
    year: "c.1940s",
    era: "Mid-Century",
    category: "Transitional",
    collectibility: "Lower",
    color: "#7a8a7a",
    description: "Named after Newell, West Virginia — the location of HLC's main factory. A clean, simple shape used as a blank for various decal treatments.",
    notes: "Named after the factory town — a piece of HLC lore.",
    searchQuery: "Homer Laughlin Newell West Virginia shape dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/isla/6ad4c2/34781930/isla_fullxfull.34781930_q7t5.jpg"
  },
  {
    name: "Niagara",
    year: "1901",
    era: "Victorian–Edwardian",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#5a8a9a",
    description: "Early-century shape named after Niagara Falls. Traditional proportions with modest embossing — dignified domestic and institutional china.",
    notes: "More historical footnote than primary collector focus.",
    searchQuery: "Homer Laughlin Niagara 1901 china shape vintage antique",
    imageUrl: "https://i.etsystatic.com/isla/e2b12c/36971022/isla_fullxfull.36971022_k3p5.jpg"
  },
  {
    name: "Orange Tree Bowls",
    year: "c.1940s",
    era: "Mid-Century",
    category: "Illustrated",
    collectibility: "Moderate",
    color: "#d4621a",
    description: "Decorative treatment featuring orange tree motifs — bright, cheerful, and very much of its era. Part of the citrus/botanical decorating trend popular in mid-century American kitchens.",
    notes: "Collector appeal crosses into citrus/kitchen Americana.",
    searchQuery: "Homer Laughlin Orange Tree bowls citrus motif vintage mid century",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/d2a18b/3912748221/il_fullxfull.3912748221_n0mc.jpg"
  },
  {
    name: "Orleans",
    year: "c.1930s",
    era: "Depression Era",
    category: "French-Inspired",
    collectibility: "Moderate",
    color: "#7a5c6e",
    description: "Graceful shape with French-influenced styling referencing New Orleans. Moderate embossing, refined proportions — a step above purely utilitarian shapes of the period.",
    notes: "French-colonial naming reflects the era's Romantic aesthetic sensibilities.",
    searchQuery: "Homer Laughlin Orleans 1930s dinnerware shape vintage china",
    imageUrl: "https://i.etsystatic.com/isla/0bc2d4/33841927/isla_fullxfull.33841927_h4mk.jpg"
  },
  {
    name: "Ovenserve",
    year: "c.1933",
    era: "Depression Era",
    category: "Bakeware / Kitchen",
    collectibility: "Moderate",
    color: "#8a7060",
    description: "HLC's original oven-to-table line with embossed kitchenware. Heavier-gauge pieces designed to go from oven to table. Produced in solid glazes and with decals.",
    notes: "Casseroles and baking dishes in solid colors are most popular with collectors.",
    searchQuery: "Homer Laughlin Ovenserve embossed 1933 casserole solid color vintage",
    imageUrl: "https://i.etsystatic.com/6935898/r/il/2e4ac3/4287765681/il_fullxfull.4287765681_bh4n.jpg"
  },
  {
    name: "Pastoral",
    year: "c.1940s–50s",
    era: "Mid-Century",
    category: "Illustrated",
    collectibility: "Lower–Moderate",
    color: "#6b8b5e",
    description: "Features idyllic pastoral scenes — countryside, grazing animals, rolling hills. Mid-century Americana at its most wistful.",
    notes: "Overlaps with Americana décor collectors.",
    searchQuery: "Homer Laughlin Pastoral scenic pastoral dinnerware vintage mid century",
    imageUrl: "https://i.etsystatic.com/7527162/r/il/38c47b/3993212043/il_fullxfull.3993212043_p2ki.jpg"
  },
  {
    name: "Piccadilly",
    year: "1940",
    era: "Pre-War",
    category: "Transitional",
    collectibility: "Moderate",
    color: "#7a8a9a",
    description: "A 1940 shape representing HLC's most modernized pre-war design. Clean, minimal lines. Often produced with simple decal borders rather than heavy embossing.",
    notes: "Short-lived shape due to WWII material restrictions. Relative rarity is its appeal.",
    searchQuery: "Homer Laughlin Piccadilly 1940 pre-war dinnerware vintage shape",
    imageUrl: "https://i.etsystatic.com/isla/b5f3a2/36392174/isla_fullxfull.36392174_a8jq.jpg"
  },
  {
    name: "Ravenna",
    year: "c.1930",
    era: "Depression Era",
    category: "Italian-Inspired",
    collectibility: "Lower",
    color: "#9a7050",
    description: "Named after the Italian city known for its Byzantine mosaics. A formal shape with European elegance — likely produced with gold-trim and floral decal treatments.",
    notes: "Primarily of interest to shape completists.",
    searchQuery: "Homer Laughlin Ravenna 1930 depression era dinnerware shape vintage",
    imageUrl: "https://i.etsystatic.com/isla/9dc1e8/28723411/isla_fullxfull.28723411_jf3p.jpg"
  },
  {
    name: "Republic",
    year: "1920",
    era: "1920s",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#9a8060",
    description: "A 1920s domestic and hotel shape with patriotic naming. Clean, functional lines representative of American production confidence in the post-WWI era.",
    notes: "Gold-trim pieces can be quite attractive — look for intact gilding.",
    searchQuery: "Homer Laughlin Republic 1920 dinnerware shape vintage china",
    imageUrl: "https://i.etsystatic.com/isla/7baf83/30512388/isla_fullxfull.30512388_kq2p.jpg"
  },
  {
    name: "Rhythm",
    year: "1951",
    era: "Mid-Century Modern",
    category: "Solid Color / Mid-Century",
    collectibility: "Moderate–High",
    color: "#9b6b5e",
    description: "Clean mid-century shape in solid colors (chartreuse, coral, forest green, gray, yellow) and with decals. Simple, functional lines without embossing — pure 1950s modernism.",
    notes: "Solid-color Rhythm pieces are increasingly popular as MCM décor interest grows.",
    searchQuery: "Homer Laughlin Rhythm solid color chartreuse coral dinnerware 1951 MCM",
    imageUrl: "https://i.etsystatic.com/15038516/r/il/9b4fc4/3778344661/il_fullxfull.3778344661_3tmn.jpg"
  },
  {
    name: "Serenade",
    year: "1939",
    era: "Pre-War",
    category: "Solid Color",
    collectibility: "Moderate",
    color: "#a8c4d4",
    description: "Soft, delicate solid-color line in pastel glazes — yellow, blue, green, and pink. Lighter and more feminine in feel than Fiesta. Produced for just a few years before the war.",
    notes: "Often overlooked but genuinely pretty. Good entry point for new collectors who like pastels.",
    searchQuery: "Homer Laughlin Serenade pastel 1939 solid color dinnerware vintage",
    imageUrl: "https://i.etsystatic.com/21571327/r/il/1d9c3b/3899822379/il_fullxfull.3899822379_6n2k.jpg"
  },
  {
    name: "Skytone / Suntone",
    year: "1948",
    era: "Post-War",
    category: "Post-War Line",
    collectibility: "Moderate",
    color: "#7aa0c4",
    description: "Companion lines to Jubilee and Debutante from HLC's 1948 soft-color launch. Skytone is soft sky blue; Suntone is warm tan/beige. Same clean post-war shape.",
    notes: "Skytone blue is the more desirable of the two.",
    searchQuery: "Homer Laughlin Skytone blue dinnerware 1948 post war vintage",
    imageUrl: "https://i.etsystatic.com/15038516/r/il/a3d8f1/4119239847/il_fullxfull.4119239847_8mvh.jpg"
  },
  {
    name: "Swing",
    year: "1938",
    era: "Art Deco",
    category: "Eggshell Family",
    collectibility: "Moderate",
    color: "#4a5c7a",
    description: "Named for the Swing Era of jazz, this Eggshell shape has fluid, rhythmic lines. Art Deco streamlining at its most musical. Produced with many decal treatments.",
    notes: "Treatment numbers use the 'S' prefix code. Look for S-203 and similar markings.",
    searchQuery: "Homer Laughlin Swing Eggshell art deco dinnerware 1938 vintage",
    imageUrl: "https://www.laurelhollowpark.net/hlc/swingcasserole.jpg"
  },
  {
    name: "Tango",
    year: "1938",
    era: "Art Deco",
    category: "Solid Color",
    collectibility: "Higher",
    color: "#9a2a2a",
    description: "Short-lived Art Deco shape in solid glazes. Bold and angular — the visual equivalent of its namesake dance. Produced briefly; relatively rare.",
    notes: "Rarity makes it attractive. Often confused with other solid-glaze lines.",
    searchQuery: "Homer Laughlin Tango solid glaze art deco dinnerware rare vintage",
    imageUrl: "https://i.etsystatic.com/22007234/r/il/8e3df2/4287561193/il_fullxfull.4287561193_k9mn.jpg"
  },
  {
    name: "Theme",
    year: "1939",
    era: "Pre-War",
    category: "Eggshell Family",
    collectibility: "Moderate",
    color: "#6a7a8a",
    description: "A 1939 Eggshell-family shape with clean, musical-reference naming (like Swing). Produced with decal treatments. Limited production window due to WWII.",
    notes: "Less common than Georgian or Nautilus Eggshell. Worth seeking out.",
    searchQuery: "Homer Laughlin Theme Eggshell 1939 dinnerware vintage shape",
    imageUrl: "https://i.etsystatic.com/isla/7c2a8b/36219714/isla_fullxfull.36219714_p6mh.jpg"
  },
  {
    name: "Virginia Rose",
    year: "1932",
    era: "Depression Era",
    category: "Shape (Not a Pattern)",
    collectibility: "Moderate–High",
    color: "#c4758a",
    description: "Designed by Frederick Hurten Rhead himself. Features embossed rose and leaf motifs on the rim. KEY: Virginia Rose is a SHAPE, not a decal. The two most common treatments — VR-128 'Fluffy Rose' and JJ-59 'Moss Rose' — are often mistakenly called 'Virginia Rose.'",
    notes: "Hundreds of decal treatments applied to this shape. Fluffy Rose and Moss Rose are most common.",
    searchQuery: "Homer Laughlin Virginia Rose Fluffy Rose dinnerware shape vintage",
    imageUrl: "https://i.etsystatic.com/9297680/r/il/e6ab89/4294752823/il_fullxfull.4294752823_n5tp.jpg"
  },
  {
    name: "Wells Art Glaze",
    year: "c.1930s",
    era: "Depression Era",
    category: "Solid Color / Art Glaze",
    collectibility: "Moderate–High",
    color: "#6a5a3a",
    description: "Named after Joseph M. Wells Sr. Features rich, mottled art-glaze finishes — similar in feel to art pottery rather than commercial dinnerware. A distinctive and underappreciated line.",
    notes: "The art-glaze finish makes it unique among HLC productions. Closest HLC gets to studio pottery.",
    searchQuery: "Homer Laughlin Wells Art Glaze 1930s mottled copper rust vintage",
    imageUrl: "https://i.etsystatic.com/6935898/r/il/3c8da9/4497847295/il_fullxfull.4497847295_f3n4.jpg"
  },
  {
    name: "Yellowstone",
    year: "1926",
    era: "1920s",
    category: "Early Classic",
    collectibility: "Lower",
    color: "#c8a46a",
    description: "A 1926 shape with warm, traditional styling. Produced with both decal and solid-glaze treatments. Named for America's iconic national park.",
    notes: "Named the year after Yellowstone became America's first national park (established 1872, though the shape isn't quite that old).",
    searchQuery: "Homer Laughlin Yellowstone 1926 dinnerware shape vintage china",
    imageUrl: "https://i.etsystatic.com/isla/24b3c9/33287841/isla_fullxfull.33287841_l7m2.jpg"
  }
];

const collectibilityRank = {
  "Lower": 1, "Lower–Moderate": 2, "Moderate": 3,
  "Moderate–High": 4, "Higher": 4, "High": 5, "Very High": 6, "Growing": 3
};

const collectibilityColor = {
  "Lower": "#9a9a9a", "Lower–Moderate": "#b8905a",
  "Moderate": "#c4a830", "Moderate–High": "#7a9a30",
  "Higher": "#4a8a5a", "High": "#2a7a4a",
  "Very High": "#1a5a3a", "Growing": "#4a6a9a"
};

const eras = ["All", ...new Set(shapes.map(s => s.era))];
const categories = ["All", ...new Set(shapes.map(s => s.category))];

function ShapeCard({ shape, isSelected, onClick }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Fallback: use a colored placeholder with a search link
  const etsySearchUrl = `https://www.etsy.com/search?q=${encodeURIComponent(shape.searchQuery)}`;

  return (
    <div
      onClick={onClick}
      style={{
        background: isSelected ? "#f5ede0" : "#faf6ef",
        cursor: "pointer",
        borderLeft: `5px solid ${shape.color}`,
        borderBottom: "1px solid #e0d0b0",
        borderRight: "1px solid #e0d0b0",
        borderTop: "1px solid #e0d0b0",
        overflow: "hidden",
        transition: "box-shadow 0.15s, transform 0.15s",
        boxShadow: isSelected ? "0 4px 16px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.06)",
        transform: isSelected ? "translateY(-1px)" : "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Image area */}
      <div style={{
        width: "100%",
        height: "160px",
        background: imgError || !shape.imageUrl ? shape.color + "22" : "#f0e8d8",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {!imgError && shape.imageUrl ? (
          <>
            {!imgLoaded && (
              <div style={{
                position: "absolute", inset: 0,
                background: shape.color + "15",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "0.5rem"
              }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: shape.color + "40", animation: "pulse 1.5s infinite" }} />
              </div>
            )}
            <img
              src={shape.imageUrl}
              alt={shape.name}
              onError={() => setImgError(true)}
              onLoad={() => setImgLoaded(true)}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: imgLoaded ? "block" : "none"
              }}
            />
          </>
        ) : (
          <div style={{
            textAlign: "center", padding: "1rem",
            color: shape.color, opacity: 0.7
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>🍽</div>
            <div style={{ fontSize: "0.7rem", fontFamily: "Georgia, serif" }}>
              <a href={etsySearchUrl} target="_blank" rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ color: shape.color, textDecoration: "underline" }}>
                Search photos →
              </a>
            </div>
          </div>
        )}
        {/* Year badge */}
        <div style={{
          position: "absolute", top: 8, right: 8,
          background: shape.color,
          color: "#fff",
          fontSize: "0.65rem",
          padding: "2px 8px",
          letterSpacing: "0.05em",
          fontFamily: "Georgia, serif"
        }}>
          {shape.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "0.9rem 1rem 0.75rem" }}>
        <h3 style={{
          margin: "0 0 0.2rem",
          fontSize: "0.95rem",
          fontFamily: "Georgia, serif",
          color: "#1e1610",
          fontWeight: "bold"
        }}>
          {shape.name}
        </h3>
        <div style={{
          fontSize: "0.7rem",
          color: "#8a7050",
          fontStyle: "italic",
          marginBottom: "0.5rem"
        }}>
          {shape.era} · {shape.category}
        </div>
        <p style={{
          margin: "0 0 0.6rem",
          fontSize: "0.8rem",
          lineHeight: "1.5",
          color: "#3a2a1a"
        }}>
          {shape.description}
        </p>

        {/* Collectibility */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          marginBottom: isSelected ? "0.75rem" : 0
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: collectibilityColor[shape.collectibility] || "#888"
          }} />
          <span style={{
            fontSize: "0.7rem",
            color: collectibilityColor[shape.collectibility] || "#888",
            fontWeight: "bold",
            letterSpacing: "0.05em"
          }}>
            {shape.collectibility} collectibility
          </span>
        </div>

        {/* Expanded notes */}
        {isSelected && (
          <div style={{
            background: "#e8dcc8",
            padding: "0.6rem 0.75rem",
            fontSize: "0.8rem",
            color: "#4a3a2a",
            fontStyle: "italic",
            lineHeight: "1.5",
            borderLeft: `3px solid ${shape.color}`,
            marginBottom: "0.5rem"
          }}>
            💡 {shape.notes}
          </div>
        )}

        {isSelected && (
          <a
            href={etsySearchUrl}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              color: shape.color,
              textDecoration: "none",
              border: `1px solid ${shape.color}`,
              padding: "3px 10px",
              marginTop: "0.25rem"
            }}
          >
            Find pieces on Etsy →
          </a>
        )}

        <div style={{
          textAlign: "right",
          fontSize: "0.65rem",
          color: "#b0956a",
          marginTop: isSelected ? "0.5rem" : "0.25rem"
        }}>
          {isSelected ? "▲ collapse" : "▼ more"}
        </div>
      </div>
    </div>
  );
}

export default function HLCCAGuide() {
  const [search, setSearch] = useState("");
  const [eraFilter, setEraFilter] = useState("All");
  const [catFilter, setCatFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("year");

  const filtered = shapes
    .filter(s => {
      const q = search.toLowerCase();
      return (
        (s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.notes.toLowerCase().includes(q)) &&
        (eraFilter === "All" || s.era === eraFilter) &&
        (catFilter === "All" || s.category === catFilter)
      );
    })
    .sort((a, b) => {
      if (sortBy === "year") return parseInt(a.year) - parseInt(b.year);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "collect") return (collectibilityRank[b.collectibility] || 0) - (collectibilityRank[a.collectibility] || 0);
      return 0;
    });

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#faf6ef", minHeight: "100vh", color: "#2a1f14" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        * { box-sizing: border-box; }
        select, input { outline: none; }
        a { color: inherit; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#1e1610", color: "#e8d5b0", padding: "2rem 2rem 1.5rem", textAlign: "center", borderBottom: "4px solid #c9a96e" }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", color: "#c9a96e", marginBottom: "0.5rem", textTransform: "uppercase" }}>
          Homer Laughlin China Collectors Association · Member Reference
        </div>
        <h1 style={{ margin: "0 0 0.3rem", fontSize: "2rem", fontWeight: "normal", letterSpacing: "0.04em" }}>
          Visual Collector's Guide
        </h1>
        <p style={{ margin: 0, color: "#b0956a", fontSize: "0.85rem", fontStyle: "italic" }}>
          All {shapes.length} shapes & lines on the HLCCA membership form · Click any card to expand
        </p>
      </div>

      {/* Controls */}
      <div style={{ background: "#f0e8d8", borderBottom: "1px solid #d4c4a4", padding: "0.75rem 1.25rem", display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
        <input
          placeholder="🔍 Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: "0.45rem 0.9rem", border: "1px solid #c4a870", background: "#faf6ef", fontFamily: "Georgia, serif", fontSize: "0.85rem", flex: "1", minWidth: "160px", color: "#2a1f14" }}
        />
        {[["eraFilter", eraFilter, setEraFilter, eras], ["catFilter", catFilter, setCatFilter, categories]].map(([key, val, setter, opts]) => (
          <select key={key} value={val} onChange={e => setter(e.target.value)}
            style={{ padding: "0.45rem 0.75rem", border: "1px solid #c4a870", background: "#faf6ef", fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#2a1f14", cursor: "pointer", maxWidth: "200px" }}>
            {opts.map(o => <option key={o}>{o}</option>)}
          </select>
        ))}
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}
          style={{ padding: "0.45rem 0.75rem", border: "1px solid #c4a870", background: "#faf6ef", fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#2a1f14", cursor: "pointer" }}>
          <option value="year">Sort: Year</option>
          <option value="name">Sort: A–Z</option>
          <option value="collect">Sort: Collectibility</option>
        </select>
        <span style={{ fontSize: "0.78rem", color: "#8a7050", fontStyle: "italic", whiteSpace: "nowrap" }}>
          {filtered.length}/{shapes.length} shapes
        </span>
      </div>

      {/* Legend */}
      <div style={{ padding: "0.6rem 1.25rem", background: "#f8f2e8", borderBottom: "1px solid #e8d8b8", display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: "0.7rem", color: "#8a7050", textTransform: "uppercase", letterSpacing: "0.1em" }}>Collectibility:</span>
        {["Lower", "Moderate", "High", "Very High"].map(level => (
          <span key={level} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: collectibilityColor[level] }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: collectibilityColor[level], display: "inline-block" }} />
            {level}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1rem",
        padding: "1.25rem"
      }}>
        {filtered.map(shape => (
          <ShapeCard
            key={shape.name}
            shape={shape}
            isSelected={selected?.name === shape.name}
            onClick={() => setSelected(selected?.name === shape.name ? null : shape)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem", color: "#8a7050", fontStyle: "italic" }}>
          No shapes match your search. Try clearing filters.
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "1.5rem", color: "#8a7050", fontSize: "0.75rem", borderTop: "1px solid #d4c4a4", fontStyle: "italic" }}>
        Sources: HLCCA.org · laurelhollowpark.net · Carnegie Public Library HLC Archive · Click any expanded card to search Etsy for that shape
      </div>
    </div>
  );
}
