/* ==========================================
   LAYORA PRODUCTS DATABASE
========================================== */

const products = [

{
id:"LAY001",
name:"Moja Hand Sleeves",
category:"Accessories",
fabric:"Premium Stretch Fabric",
mrp:199,
price:169,
badge:"BEST SELLER",
image:"photos/products/LAY001.jpeg",
description:"Premium stretch hand sleeves for everyday modest wear.",
featured:true,
newArrival:false
},

{
id:"LAY002",
name:"Zera Tube Cap",
category:"Accessories",
fabric:"Cotton",
mrp:179,
price:149,
badge:"",
image:"photos/products/LAY002.jpeg",
description:"Soft breathable tube cap for comfortable hijab styling.",
featured:true,
newArrival:false
},

{
id:"LAY003",
name:"Zera Bonnet Cap",
category:"Accessories",
fabric:"Cotton",
mrp:189,
price:149,
badge:"",
image:"photos/products/LAY003.jpeg",
description:"Premium bonnet cap with soft cotton fabric.",
featured:false,
newArrival:false
},

{
id:"LAY004",
name:"Moja Shoulder Sleeves",
category:"Accessories",
fabric:"Premium Cotton",
mrp:399,
price:320,
badge:"",
image:"photos/products/LAY004.jpeg",
description:"Elegant shoulder sleeves for modest fashion.",
featured:false,
newArrival:false
},

{
id:"LAY005",
name:"Zera Shoulder Sleeves",
category:"Accessories",
fabric:"Premium Cotton",
mrp:399,
price:319,
badge:"",
image:"photos/products/LAY005.jpeg",
description:"Comfortable shoulder sleeves with premium finish.",
featured:false,
newArrival:false
},

{
id:"LAY006",
name:"Scrunchies",
category:"Accessories",
fabric:"Premium Satin",
mrp:259,
price:149,
badge:"NEW",
image:"photos/products/LAY006.jpeg",
description:"Luxury satin scrunchies for daily styling.",
featured:true,
newArrival:true
},

{
id:"LAY007",
name:"Moja Loop Pin",
category:"Accessories",
fabric:"Metal",
mrp:299,
price:199,
badge:"",
image:"photos/products/LAY007.jpeg",
description:"Premium hijab loop pin.",
featured:false,
newArrival:false
},

{
id:"LAY008",
name:"Zera Shaper",
category:"Accessories",
fabric:"Cotton",
mrp:199,
price:119,
badge:"",
image:"photos/products/LAY008.jpeg",
description:"Comfortable hijab shaper.",
featured:false,
newArrival:false
},

{
id:"LAY009",
name:"Zera Tape",
category:"Accessories",
fabric:"Skin Tape",
mrp:199,
price:99,
badge:"",
image:"photos/products/LAY009.jpeg",
description:"Invisible hijab tape.",
featured:false,
newArrival:false
},

{
id:"LAY010",
name:"Plastic Pin",
category:"Accessories",
fabric:"Plastic",
mrp:229,
price:119,
badge:"",
image:"photos/products/LAY010.jpeg",
description:"Premium plastic hijab pin.",
featured:false,
newArrival:false
},

{
id:"LAY011",
name:"Moja Magnetic Pin",
category:"Accessories",
fabric:"Magnetic",
mrp:169,
price:169,
badge:"",
image:"photos/products/LAY011.jpeg",
description:"Strong magnetic hijab pin.",
featured:true,
newArrival:false
},

{
id:"LAY012",
name:"Ball Pin",
category:"Accessories",
fabric:"Metal",
mrp:99,
price:70,
badge:"",
image:"photos/products/LAY012.jpeg",
description:"Classic ball pin for everyday hijab styling.",
featured:false,
newArrival:false
},

{
id:"LAY013",
name:"Scarf Pin",
category:"Accessories",
fabric:"Metal",
mrp:125,
price:99,
badge:"",
image:"photos/products/LAY013.jpeg",
description:"Elegant scarf pin with premium finish.",
featured:false,
newArrival:false
},

{
id:"LAY014",
name:"Zera Luxe Jersey",
category:"Jersey",
fabric:"Premium Jersey",
mrp:349,
price:319,
badge:"BEST SELLER",
image:"photos/products/LAY014.jpeg",
description:"Soft premium jersey hijab with elegant drape.",
featured:true,
newArrival:false
},

{
id:"LAY015",
name:"Moja Malaysian Georgette",
category:"Georgette",
fabric:"Malaysian Georgette",
mrp:349,
price:299,
badge:"",
image:"photos/products/LAY015.jpeg",
description:"Lightweight Malaysian georgette hijab.",
featured:true,
newArrival:false
},

{
id:"LAY016",
name:"Zera Malaysian Georgette",
category:"Georgette",
fabric:"Malaysian Georgette",
mrp:319,
price:299,
badge:"",
image:"photos/products/LAY016.jpeg",
description:"Premium Malaysian georgette hijab.",
featured:false,
newArrival:false
},

{
id:"LAY017",
name:"Moja Jersey",
category:"Jersey",
fabric:"Premium Jersey",
mrp:399,
price:299,
badge:"POPULAR",
image:"photos/products/LAY017.jpeg",
description:"Comfortable premium jersey hijab.",
featured:true,
newArrival:false
},

{
id:"LAY018",
name:"Zera Water Colour Modal Cotton",
category:"Cotton",
fabric:"Modal Cotton",
mrp:469,
price:369,
badge:"PREMIUM",
image:"photos/products/LAY018.jpeg",
description:"Premium modal cotton hijab with water colour design.",
featured:true,
newArrival:true
},

{
id:"LAY019",
name:"Moja Organza",
category:"Organza",
fabric:"Premium Organza",
mrp:299,
price:299,
badge:"",
image:"photos/products/LAY019.jpeg",
description:"Elegant organza hijab for special occasions.",
featured:false,
newArrival:false
},

{
id:"LAY020",
name:"Zera Crinkled Cotton",
category:"Cotton",
fabric:"Crinkled Cotton",
mrp:299,
price:269,
badge:"",
image:"photos/products/LAY020.jpeg",
description:"Soft crinkled cotton hijab for daily wear.",
featured:false,
newArrival:false
},

{
id:"LAY021",
name:"Cotton Print With Tassels",
category:"Cotton",
fabric:"Printed Cotton",
mrp:399,
price:320,
badge:"NEW",
image:"photos/products/LAY021.jpeg",
description:"Printed cotton hijab with elegant tassels.",
featured:true,
newArrival:true
},

{
id:"LAY022",
name:"Organza Shimmer Rhinestone",
category:"Organza",
fabric:"Shimmer Organza",
mrp:369,
price:319,
badge:"PREMIUM",
image:"photos/products/LAY022.jpeg",
description:"Luxury shimmer organza hijab with rhinestone detailing.",
featured:true,
newArrival:true
},
{
id:"LAY023",
name:"Magnetic Hijabs",
category:"Accessories",
fabric:"Premium Magnetic",
mrp:469,
price:369,
badge:"BEST SELLER",
image:"photos/products/LAY023.jpeg",
description:"Premium magnetic hijab accessory for secure and comfortable styling.",
featured:true,
newArrival:false
},

{
id:"LAY024",
name:"Malaysian Cotton",
category:"Cotton",
fabric:"Malaysian Cotton",
mrp:449,
price:269,
badge:"",
image:"photos/products/LAY024.jpeg",
description:"Premium Malaysian cotton hijab with soft breathable fabric.",
featured:false,
newArrival:false
},

{
id:"LAY025",
name:"Bubble Satin Stone",
category:"Satin",
fabric:"Bubble Satin",
mrp:399,
price:319,
badge:"PREMIUM",
image:"photos/products/LAY025.jpeg",
description:"Luxury bubble satin hijab with elegant stone finish.",
featured:true,
newArrival:false
},

{
id:"LAY026",
name:"Zera Luxe Satin",
category:"Satin",
fabric:"Premium Satin",
mrp:349,
price:299,
badge:"BEST SELLER",
image:"photos/products/LAY026.jpeg",
description:"Elegant premium satin hijab with smooth luxurious texture.",
featured:true,
newArrival:true
},

{
id:"LAY027",
name:"Textured Satin",
category:"Satin",
fabric:"Textured Satin",
mrp:399,
price:319,
badge:"",
image:"photos/products/LAY027.jpeg",
description:"Premium textured satin hijab suitable for every occasion.",
featured:false,
newArrival:false
},

{
id:"LAY028",
name:"Zera M G Triple Black",
category:"Satin",
fabric:"Premium Satin",
mrp:469,
price:349,
badge:"PREMIUM",
image:"photos/products/LAY028.jpeg",
description:"Exclusive triple black premium satin hijab.",
featured:true,
newArrival:true
},

{
id:"LAY029",
name:"Ombre Chiffon",
category:"Chiffon",
fabric:"Premium Chiffon",
mrp:299,
price:269,
badge:"",
image:"photos/products/LAY029.jpeg",
description:"Soft ombre chiffon hijab with elegant gradient colours.",
featured:false,
newArrival:false
},

{
id:"LAY030",
name:"Moja Strips Chiffon",
category:"Chiffon",
fabric:"Premium Chiffon",
mrp:399,
price:349,
badge:"NEW",
image:"photos/products/LAY030.jpeg",
description:"Elegant striped chiffon hijab with premium finish.",
featured:true,
newArrival:true
},

{
id:"LAY031",
name:"Moja Kids Jersey",
category:"Kids",
fabric:"Premium Jersey",
mrp:349,
price:299,
badge:"",
image:"photos/products/LAY031.jpeg",
description:"Comfortable jersey hijab specially designed for kids.",
featured:false,
newArrival:false
},

{
id:"LAY032",
name:"Moja Kids Organza",
category:"Kids",
fabric:"Premium Organza",
mrp:349,
price:299,
badge:"",
image:"photos/products/LAY032.jpeg",
description:"Beautiful organza hijab for kids with elegant styling.",
featured:false,
newArrival:false
},

{
id:"LAY033",
name:"Zera Neck Cover",
category:"Accessories",
fabric:"Cotton",
mrp:249,
price:199,
badge:"",
image:"photos/products/LAY033.jpeg",
description:"Soft and breathable neck cover for modest wear.",
featured:false,
newArrival:false
},
{
id:"LAY034",
name:"Moja Tie Cap",
category:"Accessories",
fabric:"Premium Cotton",
mrp:269,
price:199,
badge:"",
image:"photos/products/LAY034.jpeg",
description:"Comfortable tie cap for secure hijab styling.",
featured:false,
newArrival:false
},

{
id:"LAY035",
name:"Niqab",
category:"Niqab",
fabric:"Premium Nida",
mrp:269,
price:219,
badge:"",
image:"photos/products/LAY035.jpeg",
description:"Elegant premium niqab for modest wear.",
featured:false,
newArrival:false
},

{
id:"LAY036",
name:"Yusra Georgette",
category:"Georgette",
fabric:"Premium Georgette",
mrp:349,
price:299,
badge:"NEW",
image:"photos/products/LAY036.jpeg",
description:"Soft and lightweight premium georgette hijab.",
featured:true,
newArrival:true
},

{
id:"LAY037",
name:"Muna Satin",
category:"Satin",
fabric:"Premium Satin",
mrp:299,
price:279,
badge:"",
image:"photos/products/LAY037.jpeg",
description:"Smooth satin hijab with elegant drape.",
featured:false,
newArrival:false
},

{
id:"LAY038",
name:"Organza Yusra",
category:"Organza",
fabric:"Premium Organza",
mrp:369,
price:349,
badge:"PREMIUM",
image:"photos/products/LAY038.jpeg",
description:"Luxury organza hijab with graceful finish.",
featured:true,
newArrival:true
},

{
id:"LAY039",
name:"Soft Cotton Print (Flower)",
category:"Cotton",
fabric:"Printed Cotton",
mrp:299,
price:230,
badge:"",
image:"photos/products/LAY039.jpeg",
description:"Soft floral printed cotton hijab.",
featured:false,
newArrival:false
},

{
id:"LAY040",
name:"Rafka Heavy Chiffon",
category:"Chiffon",
fabric:"Heavy Chiffon",
mrp:349,
price:299,
badge:"BEST SELLER",
image:"photos/products/LAY040.jpeg",
description:"Premium heavy chiffon hijab with elegant fall.",
featured:true,
newArrival:false
},

{
id:"LAY041",
name:"Shimmer Crush Satin",
category:"Satin",
fabric:"Crush Satin",
mrp:399,
price:369,
badge:"PREMIUM",
image:"photos/products/LAY041.jpeg",
description:"Luxury shimmer crush satin hijab.",
featured:true,
newArrival:true
},

{
id:"LAY042",
name:"Ombre Turkish Cotton",
category:"Cotton",
fabric:"Turkish Cotton",
mrp:299,
price:269,
badge:"",
image:"photos/products/LAY042.jpeg",
description:"Premium Turkish cotton hijab with ombre shades.",
featured:false,
newArrival:false
},

{
id:"LAY043",
name:"Yusra Chiffon",
category:"Chiffon",
fabric:"Premium Chiffon",
mrp:399,
price:349,
badge:"BEST SELLER",
image:"photos/products/LAY043.jpeg",
description:"Elegant premium chiffon hijab for every occasion.",
featured:true,
newArrival:false
},

{
id:"LAY044",
name:"Rafka Organza",
category:"Organza",
fabric:"Premium Organza",
mrp:369,
price:349,
badge:"NEW",
image:"photos/products/LAY044.jpeg",
description:"Luxury organza hijab with premium finish.",
featured:true,
newArrival:true
}

];
