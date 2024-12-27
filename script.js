const products = [
    {
        name: 'iPhone 15 Pro Max',
        image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-IN_817ead95-bff3-4129-866d-3f87976e8be2.jpg?v=1694759321&width=1445',
        description: 'Latest model from Apple with 6GB RAM and 256GB storage',
        price: '1,40,999',
        competitorPrices: {
            Amazon: { price: '1,40,999', url: 'https://amzn.in/d/5Caov3x' },
            'Sangeetha Mobiles': { price: '1,34,000', url: 'https://www.sangeethamobiles.com/product-details/apple-iphone-15-pro-max-256gb-blue-titanium-mu7a3hna/14585' },
            'India Store': { price: '1,74,900', url: 'https://www.indiaistore.com/iphone-16-pro-max' }
        },
        size: '6.1 inches',
        deliveryDate: 'Ships in 3-5 days'
    },
    {
        name: 'Samsung Galaxy S24 Ultra',
        image: 'https://m.media-amazon.com/images/I/81vxWpPpgNL.AC_UF1000,1000_QL80.jpg',
        description: 'High-end smartphone with stunning display, 12GB RAM and 256GB storage',
        price: '1,01,500',
        competitorPrices: {
            Amazon: { price: '1,01,500', url: 'https://www.amazon.com/dp/B08N2NWY4T' },
            'Flipkart': { price: '1,31,999', url: 'https://www.flipkart.com/samsung-galaxy-s24-ultra-12gb-256gb/p/itm69f8b7d5fdd2a' },
            'Sangeetha Mobiles': { price: '1,23,999', url: 'https://www.sangeethamobiles.com/product-details/samsung-galaxy-s24-ultra-12gb-256gb-titanium-sm-s928bztcins/15726' }
        },
        size: '6.2 inches',
        deliveryDate: 'Ships in 2-4 days'
    },
    {
        name: 'Google Pixel 9 Pro',
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/q/b/g/-original-imah3zznscgh3fgk.jpeg?q=90&crop=false',
        description: 'Best camera phone on the market with 12GB RAM and 128GB storage',
        price: '1,24,999',
        competitorPrices: {
            Amazon: { price: '1,23,900', url: 'https://www.amazon.com/dp/B09G9FZQMG' },
            'Flipkart': { price: '1,24,999', url: 'https://www.flipkart.com/google-pixel-6-128-gb/p/itm7b4ab12345' },
            'Sangeetha Mobiles': { price: '1,15,000', url: 'https://www.sangeethamobiles.com/product-details/google-pixel-9-pro-128gb/14578' }
        },
        size: '6.4 inches',
        deliveryDate: 'Ships in 5-7 days'
    },
    {
        name: 'OnePlus 13',
        image: 'https://myfusionmobile.com/wp-content/uploads/2024/02/Oneplus-13-Pro.jpg',
        description: 'Flagship phone with great performance, 12GB RAM and 256GB storage',
        price: '64,999',
        competitorPrices: {
            Amazon: { price: '63,000', url: 'https://www.amazon.com/dp/B092YRX8JB' },
            'Flipkart': { price: '65,999', url: 'https://www.flipkart.com/oneplus-13/p/itm5b4ab12345' },
            'Sangeetha Mobiles': { price: '69,000', url: 'https://www.sangeethamobiles.com/product-details/oneplus-13-128gb/14580' }
        },
        size: '6.55 inches',
        deliveryDate: 'Ships in 3-5 days'
    },
    {
        name: 'Xiaomi Mi 13',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/388816165/OH/CD/AS/211678930/brand-new-original-xiaomi-mi-13-ultra-smartphone-snapdragon-8-gen-2.jpeg',
        description: 'Affordable flagship with premium features, 12GB RAM and 256GB storage',
        price: '30,000',
        competitorPrices: {
            Amazon: { price: '31,000', url: 'https://www.amazon.com/dp/B08YJ2T7FD' },
            'Flipkart': { price: '31,999', url: 'https://www.bestbuy.com/site/xiaomi-mi-11-5g-128gb-unlocked-black/6450966.p?skuId=6450966' },
            Walmart: { price: '30,999', url: 'https://www.walmart.com/ip/Xiaomi-Mi-11-5G-Smartphone-128GB/902998030' }
        },
        size: '6.81 inches',
        deliveryDate: 'Ships in 4-6 days'
    },
    {
        name: 'MacBook Pro 16-inch',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-gallery1-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1671304676583',
        description: 'Powerful laptop with M2 Max chip',
        price: '₹2,88,892',
        competitorPrices: {
            Amazon: { price: '₹2,85,000', url: 'https://www.amazon.com/dp/B09V4ZVSLD' },
            Flipkart: { price: '₹2,88,892', url: 'https://www.flipkart.com/apple-macbook-pro' },
            Walmart: { price: '₹2,86,000', url: 'https://www.walmart.com/ip/MacBook-Pro-16-2023/345634655' }
        },
        size: '16 inches',
        deliveryDate: 'Ships in 2-3 days'
    },
    {
        name: 'Dell XPS 15',
        image: 'https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/x/s/xs9510t_cnb_05000ff090_bk-1280x1280.jpeg',
        description: 'Ultra-thin laptop with InfinityEdge display',
        price: '₹1,81,340',
        competitorPrices: {
            Amazon: { price: '₹1,79,767', url: 'https://www.amazon.com/dp/B09XPD7FYD' },
            Flipkart: { price: '₹1,81,340', url: 'https://www.flipkart.com/dell-xps-15' },
            Walmart: { price: '₹1,80,292', url: 'https://www.walmart.com/ip/Dell-XPS-15/678999000' }
        },
        size: '15.6 inches',
        deliveryDate: 'Ships in 3-5 days'
    },
    {
        name: 'Samsung Neo QLED 8K',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn800bkxxl/gallery/in-qled-qn800b-qa65qn800bkxxl-537156300?$684_547_PNG$',
        description: '8K Ultra HD Smart TV with quantum dot technology',
        price: '₹4,12,425',
        competitorPrices: {
            Amazon: { price: '₹4,03,447', url: 'https://www.amazon.com/dp/B091DM7R29' },
            Flipkart: { price: '₹4,12,425', url: 'https://www.flipkart.com/samsung-qled-tv' },
            Walmart: { price: '₹4,08,425', url: 'https://www.walmart.com/ip/Samsung-Neo-QLED-8K-TV/543234332' }
        },
        size: '85 inches',
        deliveryDate: 'Ships in 3-5 days'
    },
    {
        name: 'LG OLED C3',
        image: 'https://media.wired.com/photos/64e4f616b4309ed4e5faedeb/master/pass/LG-C3-OLED-TV-Gear.jpg',
        description: 'OLED TV with self-lit pixels and Dolby Vision',
        price: '₹3,29,175',
        competitorPrices: {
            Amazon: { price: '₹3,21,375', url: 'https://www.amazon.com/dp/B091DM8C3LG' },
            Flipkart: { price: '₹3,29,175', url: 'https://www.flipkart.com/lg-oled-tv' },
            Walmart: { price: '₹3,25,175', url: 'https://www.walmart.com/ip/LG-OLED-TV/678987876' }
        },
        size: '65 inches',
        deliveryDate: 'Ships in 4-6 days'
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Build competitor price list with links
        const competitorPriceList = Object.entries(product.competitorPrices)
            .map(([store, { price, url }]) => `<li><a href="${url}" target="_blank">${store}: ${price}</a></li>`)
            .join('');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="size">Size: ${product.size}</p>
            <p class="delivery">Delivery: ${product.deliveryDate}</p>
            <h3>Competitor Prices:</h3>
            <ul class="competitor-prices">${competitorPriceList}</ul>
        `;

        productList.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
