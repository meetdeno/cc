// ============================================
// CAPITAL CAPS NG - GOOGLE DRIVE IMAGES
// ============================================

console.log("🎬 Capital Caps NG Loading... (Google Drive Mode)");

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ============================================
// GOOGLE DRIVE IMAGE HELPER FUNCTIONS
// ============================================

/**
 * Convert Google Drive view links to direct download links
 * Format: https://drive.google.com/file/d/{FILE_ID}/view
 * To: https://drive.google.com/uc?export=view&id={FILE_ID}
 */
function convertToDirectLink(googleDriveLink) {
    if (!googleDriveLink) return 'https://via.placeholder.com/300x200';
    
    // If it's already a direct link, return as is
    if (googleDriveLink.includes('uc?export=view')) {
        return googleDriveLink;
    }
    
    // Extract file ID from Google Drive URL
    const fileIdMatch = googleDriveLink.match(/\/d\/([^\/]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    
    return googleDriveLink;
}

/**
 * Generate direct download links for batch of images
 */
function generateDriveLinks(baseId, count, folderName = 'caps') {
    const links = [];
    for (let i = 1; i <= count; i++) {
        // Create predictable Google Drive links
        const fileId = `${baseId}${i.toString().padStart(2, '0')}`;
        links.push(`https://drive.google.com/uc?export=view&id=${fileId}`);
    }
    return links;
}

// ============================================
// CAPS DATA WITH GOOGLE DRIVE IMAGES
// ============================================
const products = {
    regular: [
        { 
            name: "Classic Black Cap", 
            price: "₦15,000", 
            desc: "Premium black cap for everyday wear", 
            image: 'https://lh3.googleusercontent.com/d/1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq' 
        },
        { 
            name: "Navy Blue Cap", 
            price: "₦16,000", 
            desc: "Comfortable navy blue premium cap", 
            image: 'https://drive.google.com/thumbnail?id=1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq&sz=w1000' 
        },
        { 
            name: "Olive Green Cap", 
            price: "₦17,000", 
            desc: "Military-style olive premium cap", 
            image: 'https://i.ibb.co/PsRhkp2Z/10.webp' 
        },
        { 
            name: "Red Sport Cap", 
            price: "₦18,000", 
            desc: "Bright red casual premium cap", 
            image: 'https://drive.google.com/uc?export=view&id=1qWeRtYu1230984567' 
        },
        { 
            name: "Grey Casual Cap", 
            price: "₦19,000", 
            desc: "Sporty grey premium cap", 
            image: 'https://drive.google.com/uc?export=view&id=1sDfGhJk7890123456' 
        },
        { 
            name: "Camouflage Cap", 
            price: "₦20,000", 
            desc: "Popular camouflage premium pattern", 
            image: 'https://drive.google.com/uc?export=view&id=1tHgKjLi2345678901' 
        },
        { 
            name: "Brown Leather Cap", 
            price: "₦21,000", 
            desc: "Premium leather finish cap", 
            image: 'https://drive.google.com/uc?export=view&id=1uJhMlZn3456789012' 
        },
        { 
            name: "White Classic Cap", 
            price: "₦22,000", 
            desc: "Clean white premium cap", 
            image: 'https://drive.google.com/uc?export=view&id=1vKiNaXo4567890123' 
        },
        { 
            name: "Purple Premium Cap", 
            price: "₦23,000", 
            desc: "Royal purple premium design", 
            image: 'https://drive.google.com/uc?export=view&id=1wLjObYp5678901234' 
        },
        { 
            name: "Orange Sport Cap", 
            price: "₦25,000", 
            desc: "Bright orange premium sports cap", 
            image: 'https://drive.google.com/uc?export=view&id=1xMkPcZq6789012345' 
        }
    ],
    vip: [
        { 
            name: "Gold Embroidered VIP", 
            price: "₦30,000", 
            desc: "Gold thread embroidery premium", 
            image: 'https://drive.google.com/uc?export=view&id=2aNbQdEr1234567890' 
        },
        { 
            name: "Limited Edition VIP", 
            price: "₦35,000", 
            desc: "Exclusive VIP premium design", 
            image: 'https://drive.google.com/uc?export=view&id=2bOcReFs2345678901' 
        },
        { 
            name: "Designer Pattern VIP", 
            price: "₦40,000", 
            desc: "Unique geometric premium patterns", 
            image: 'https://drive.google.com/uc?export=view&id=2cPdSgGt3456789012' 
        },
        { 
            name: "Silk Lined VIP", 
            price: "₦45,000", 
            desc: "Premium cap with silk interior", 
            image: 'https://drive.google.com/uc?export=view&id=2dQeThHu4567890123' 
        },
        { 
            name: "Signature VIP", 
            price: "₦50,000", 
            desc: "Signed by master premium artisan", 
            image: 'https://drive.google.com/uc?export=view&id=2eRfUiIv5678901234' 
        },
        { 
            name: "Premium Leather VIP", 
            price: "₦55,000", 
            desc: "Genuine leather premium accents", 
            image: 'https://drive.google.com/uc?export=view&id=2fSgVjJw6789012345' 
        },
        { 
            name: "Crystal VIP Cap", 
            price: "₦60,000", 
            desc: "Crystal embedded premium design", 
            image: 'https://drive.google.com/uc?export=view&id=2gThWkKx7890123456' 
        },
        { 
            name: "Diamond VIP", 
            price: "₦65,000", 
            desc: "Diamond stitch premium pattern", 
            image: 'https://drive.google.com/uc?export=view&id=2hUiXlLy8901234567' 
        },
        { 
            name: "Platinum VIP", 
            price: "₦70,000", 
            desc: "Platinum finish premium cap", 
            image: 'https://drive.google.com/uc?export=view&id=2iVjYmMz9012345678' 
        },
        { 
            name: "Executive VIP", 
            price: "₦75,000", 
            desc: "Executive luxury premium design", 
            image: 'https://drive.google.com/uc?export=view&id=2jWkZnN0123456789' 
        }
    ],
    premium: [
        { 
            name: "24K Gold Premium", 
            price: "₦60,000", 
            desc: "Real 24K gold thread premium", 
            image: 'https://drive.google.com/uc?export=view&id=3aXkYoP1234567890' 
        },
        { 
            name: "Royal Collection Premium", 
            price: "₦65,000", 
            desc: "Fit for royalty premium", 
            image: 'https://drive.google.com/uc?export=view&id=3bYlZqR2345678901' 
        },
        { 
            name: "Platinum Edition Premium", 
            price: "₦70,000", 
            desc: "Plated metal premium details", 
            image: 'https://drive.google.com/uc?export=view&id=3cZmArS3456789012' 
        },
        { 
            name: "Heritage Premium", 
            price: "₦75,000", 
            desc: "Traditional Nigerian premium", 
            image: 'https://drive.google.com/uc?export=view&id=3dAnBsT4567890123' 
        },
        { 
            name: "Executive Luxury Premium", 
            price: "₦80,000", 
            desc: "Premium materials certified", 
            image: 'https://drive.google.com/uc?export=view&id=3eBoCtU5678901234' 
        },
        { 
            name: "Diamond Stitch Premium", 
            price: "₦85,000", 
            desc: "Hand-stitched diamond premium", 
            image: 'https://drive.google.com/uc?export=view&id=3fCpDuV6789012345' 
        },
        { 
            name: "Crystal Premium", 
            price: "₦90,000", 
            desc: "Crystal embedded premium luxury", 
            image: 'https://drive.google.com/uc?export=view&id=3gDqEvW7890123456' 
        },
        { 
            name: "Limited Gold Premium", 
            price: "₦95,000", 
            desc: "Limited edition gold premium", 
            image: 'https://drive.google.com/uc?export=view&id=3hErFwX8901234567' 
        },
        { 
            name: "Signature Premium", 
            price: "₦100,000", 
            desc: "Artist signed premium collection", 
            image: 'https://drive.google.com/uc?export=view&id=3iFsGxY9012345678' 
        },
        { 
            name: "Ultimate Premium", 
            price: "₦110,000", 
            desc: "The ultimate premium luxury cap", 
            image: 'https://drive.google.com/uc?export=view&id=3jGtHyZ0123456789' 
        }
    ]
};

// ============================================
// SHOES DATA WITH GOOGLE DRIVE IMAGES
// ============================================
const shoes = {
    casual: [
        { 
            name: "Black Sneakers", 
            price: "₦28,000", 
            desc: "Premium black casual sneakers", 
            image: 'https://i.ibb.co/wNK9pThb/1.jpg' 
        },
        { 
            name: "White Canvas", 
            price: "₦17,500", 
            desc: "Clean white canvas shoes", 
            image: 'https://i.ibb.co/jZZTD0Jb/2.jpg' 
        },
        { 
            name: "Blue Loafers",  
            price: "₦22,000", 
            desc: "Premium blue casual loafers", 
            image: 'https://i.ibb.co/gZ1qNgvf/3.jpg' 
        },
        { 
            name: "Brown Leather", 
            price: "₦25,000", 
            desc: "Genuine brown leather casual", 
            image: 'https://i.ibb.co/yFk3JVsX/4.jpg' 
        },
        { 
            name: "Black Slip-on", 
            price: "₦13,000", 
            desc: "Comfortable Black slip-on shoes", 
            image: 'https://i.ibb.co/Kzrw5SzG/5.webp' 
        },
        { 
            name: "Ash Black Loafer", 
            price: "₦22,000", 
            desc: "Ash Black Loafer casual", 
            image: 'https://i.ibb.co/TqD2s8Dg/7.webp' 
        },
        { 
            name: "Red Casual", 
            price: "₦20,000", 
            desc: "Olive Red casual shoes", 
            image: 'https://i.ibb.co/8Lmtq17c/9.webp' 
        },
        { 
            name: "Brown & Grey", 
            price: "₦13,000", 
            desc: "Classic Brown & Grey design", 
            image: 'https://i.ibb.co/9HsRbTmy/10.webp' 
        },
        { 
            name: "Women Flat", 
            price: "₦9,000", 
            desc: "Women Flat shoes", 
            image: 'https://i.ibb.co/5hkh3Vm8/12.webp' 
        },
        { 
            name: "Black Designer Casual", 
            price: "₦35,000", 
            desc: "Designer casual collection", 
            image: 'https://i.ibb.co/7JydpKnB/11.webp' 
        }
    ],
    sports: [
        { 
            name: "Classic Brown & Milk Casual", 
            price: "₦28,000", 
            desc: "Classic Brown & Milk Casual", 
            image: 'https://i.ibb.co/SwLyTtMG/13.webp' 
        },
        { 
            name: "Casual Black Shoe", 
            price: "₦13,000", 
            desc: "Casual Black", 
            image: 'https://i.ibb.co/fd4BzksX/14.webp' 
        },
        { 
            name: "Black Veiron", 
            price: "₦18,000", 
            desc: "Black Veiron shoes", 
            image: 'https://i.ibb.co/JwYkkG7P/15.webp' 
        },
        { 
            name: "Denim + Black", 
            price: "₦35,000", 
            desc: "Denim + Black", 
            image: 'https://i.ibb.co/nqcGkvd9/16.webp' 
        },
        { 
            name: "Tennis Pro", 
            price: "₦30,000", 
            desc: "Professional tennis shoes", 
            image: 'https://i.ibb.co/spbgWvQh/18.webp' 
        },
        { 
            name: "Cross Trainer", 
            price: "₦27,000", 
            desc: "Cross training premium shoes", 
            image: 'https://i.ibb.co/svtKszsm/17.webp' 
        },
        { 
            name: "Walking Sport", 
            price: "₦22,000", 
            desc: "Comfortable walking sports", 
            image: 'https://i.ibb.co/hxcf4Jkr/19.webp' 
        },
        { 
            name: "Athletic Pro", 
            price: "₦40,000", 
            desc: "Professional athletic shoes", 
            image: 'https://i.ibb.co/WN3KJtk8/20.jpg' 
        },
        { 
            name: "Track Runner", 
            price: "₦33,000", 
            desc: "Track running premium shoes", 
            image: 'https://i.ibb.co/pBD5ykv4/21.jpg' 
        },
        { 
            name: "Sports Luxury", 
            price: "₦45,000", 
            desc: "Luxury sports collection", 
            image: 'https://i.ibb.co/KzGvJ8rx/22.jpg' 
        }
    ],
    formal: [
        { 
            name: "Black Oxford", 
            price: "₦35,000", 
            desc: "Classic black oxford formal", 
            image: 'https://i.ibb.co/1f5vFJh6/23.jpg' 
        },
        { 
            name: "Brown Derby", 
            price: "₦30,000", 
            desc: "Premium brown derby shoes", 
            image: 'https://i.ibb.co/9mzMs8vD/24.jpg' 
        },
        { 
            name: "Executive Loafers", 
            price: "₦45,000", 
            desc: "Executive leather loafers", 
            image: 'https://i.ibb.co/B5KrTFyZ/25.jpg' 
        },
        { 
            name: "Classic Brogues", 
            price: "₦40,000", 
            desc: "Traditional brogue design", 
            image: 'https://i.ibb.co/F41rYCvz/26.jpg' 
        },
        { 
            name: "Formal Slip-on", 
            price: "₦32,000", 
            desc: "Premium formal slip-on", 
            image: 'https://i.ibb.co/ZpCVRCTk/27.jpg' 
        },
        { 
            name: "Leather Formal", 
            price: "₦38,000", 
            desc: "Genuine leather formal", 
            image: 'https://i.ibb.co/zTgZtmrr/28.jpg' 
        },
        { 
            name: "Executive Oxford", 
            price: "₦50,000", 
            desc: "Executive oxford premium", 
            image: 'https://i.ibb.co/4Z0j8RGG/29.jpg' 
        },
        { 
            name: "Designer Formal", 
            price: "₦55,000", 
            desc: "Designer formal collection", 
            image: 'https://i.ibb.co/qMCShVmN/30.jpg' 
        },
        { 
            name: "Luxury Formal", 
            price: "₦60,000", 
            desc: "Luxury formal shoes", 
            image: 'https://i.ibb.co/SDcDz4MX/31.jpg' 
        },
        { 
            name: "Premium Formal", 
            price: "₦65,000", 
            desc: "Ultimate premium formal", 
            image: 'https://i.ibb.co/gZmdcJBL/32.jpg' 
        }
    ]
};

// ============================================
// GOOGLE DRIVE IMAGE UPLOAD GUIDE
// ============================================
function showDriveUploadGuide() {
    console.log(`
    📁 GOOGLE DRIVE IMAGE UPLOAD GUIDE:
    
    1. UPLOAD TO GOOGLE DRIVE:
       • Go to drive.google.com
       • Create folders: caps, shoes
       • Upload your images
    
    2. GET DIRECT LINKS:
       • Right-click on image → "Get link"
       • Change link sharing to "Anyone with the link"
       • Copy the share link
    
    3. CONVERT TO DIRECT LINK:
       • Change view link to direct download:
       FROM: https://drive.google.com/file/d/1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq/view
       TO:   https://drive.google.com/uc?export=view&id=1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq
    
    4. UPDATE CODE:
       • Replace image URLs in products/shoes arrays
       • Use the converted direct links
    
    Need help? Contact: +2347017451749
    `);
}

// ============================================
// REMAINING CODE (SAME AS BEFORE)
// ============================================

// Modal Elements
const modal = document.getElementById('collection-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalProducts = document.getElementById('modal-products');

// PRICE CALCULATOR
const capTypeSelect = document.getElementById('cap-type');
const customTypeSelect = document.getElementById('custom-type');
const estimatedPrice = document.getElementById('estimated-price');

const basePrices = {
    regular: 25000,
    vip: 40000,
    premium: 70000
};

const customMultipliers = {
    text: 1,
    logo: 1.2,
    both: 1.8
};

function calculatePrice() {
    const capType = capTypeSelect.value;
    const customType = customTypeSelect.value;
    
    let price = basePrices[capType] * customMultipliers[customType];
    estimatedPrice.textContent = `₦${price.toLocaleString('en-NG')}`;
}

if (capTypeSelect && customTypeSelect && estimatedPrice) {
    capTypeSelect.addEventListener('change', calculatePrice);
    customTypeSelect.addEventListener('change', calculatePrice);
    calculatePrice();
}

// VIEW COLLECTION BUTTONS
document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        console.log(`Opening ${category} caps collection`);
        showProducts(category);
    });
});

// SHOW CAPS IN MODAL
function showProducts(category) {
    const categoryNames = {
        regular: "Regular Caps Collection (₦15,000 - ₦25,000)",
        vip: "VIP Caps Collection (₦30,000 - ₦50,000)",
        premium: "Premium VIP Caps Collection (₦60,000 - ₦110,000)"
    };
    
    modalTitle.textContent = categoryNames[category] || "Caps Collection";
    modalProducts.innerHTML = '';
    
    const categoryProducts = products[category] || [];
    
    if (categoryProducts.length === 0) {
        modalProducts.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666; grid-column: 1 / -1;">
                <i class="fas fa-cloud-upload-alt" style="font-size: 3rem; margin-bottom: 1rem; color: #4285F4;"></i>
                <h3>Upload images to Google Drive</h3>
                <p>No caps available yet. Upload images to your Google Drive.</p>
                <button onclick="showDriveUploadGuide()" 
                        style="background: #4285F4; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-top: 10px;">
                    Show Upload Guide
                </button>
            </div>
        `;
    } else {
        categoryProducts.forEach((product, index) => {
            const productHTML = `
                <div class="product-item-modal">
                    <a href="https://wa.me/2347017451749?text=I want this ${encodeURIComponent(product.name)} - ${encodeURIComponent(product.price)}" target="_blank">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" 
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/4285F4/FFFFFF?text=Image+Loading'">
                        <span class="price-tag">${product.price}</span>
                    </a>
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p>${product.desc}</p>
                        <p><small>Item ${index + 1} of ${categoryProducts.length}</small></p>
                        <button class="whatsapp-order-btn" 
                                data-product="${product.name}" 
                                data-price="${product.price}">
                            <i class="fab fa-whatsapp"></i> Order via WhatsApp
                        </button>
                    </div>
                </div>
            `;
            modalProducts.innerHTML += productHTML;
        });
        
        // Add WhatsApp order functionality
        document.querySelectorAll('.whatsapp-order-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = this.getAttribute('data-product');
                const productPrice = this.getAttribute('data-price');
                const whatsappMessage = `Hello Capital Caps! I want to order: ${productName} (${productPrice})`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                window.open(`https://wa.me/2347017451749?text=${encodedMessage}`, '_blank');
            });
        });
        
        // Show total count
        const totalCount = document.createElement('div');
        totalCount.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px; margin-top: 1rem;';
        totalCount.innerHTML = `<p><strong>Showing ${categoryProducts.length} premium caps</strong> - Click any cap to order via WhatsApp</p>`;
        modalProducts.appendChild(totalCount);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// LOAD SHOES
function loadShoes() {
    // Casual Shoes
    const casualGrid = document.querySelector('#shoes .shoes-category:nth-child(1) .shoes-grid');
    if (casualGrid) {
        shoes.casual.slice(0, 8).forEach(shoe => {
            casualGrid.innerHTML += `
                <div class="shoe-item">
                    <a href="https://wa.me/2347017451749?text=I want this Casual Shoe: ${encodeURIComponent(shoe.name)} - ${encodeURIComponent(shoe.price)}">
                        <img src="${shoe.image}" alt="${shoe.name}" 
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200/4285F4/FFFFFF?text=Shoe+Image'">
                        <span>${shoe.price}</span>
                    </a>
                    <p>${shoe.name}</p>
                </div>
            `;
        });
    }
    
    // Sports Shoes
    const sportsGrid = document.querySelector('#shoes .shoes-category:nth-child(2) .shoes-grid');
    if (sportsGrid) {
        shoes.sports.slice(0, 8).forEach(shoe => {
            sportsGrid.innerHTML += `
                <div class="shoe-item">
                    <a href="https://wa.me/2347017451749?text=I want this Casual Shoe: ${encodeURIComponent(shoe.name)} - ${encodeURIComponent(shoe.price)}">
                        <img src="${shoe.image}" alt="${shoe.name}"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200/4285F4/FFFFFF?text=Shoe+Image'">
                        <span>${shoe.price}</span>
                    </a>
                    <p>${shoe.name}</p>
                </div>
            `;
        });
    }
    
    // Formal Shoes
    const formalGrid = document.querySelector('#shoes .shoes-category:nth-child(3) .shoes-grid');
    if (formalGrid) {
        shoes.formal.slice(0, 8).forEach(shoe => {
            formalGrid.innerHTML += `
                <div class="shoe-item">
                    <a href="https://wa.me/2347017451749?text=I want this Formal Shoe: ${encodeURIComponent(shoe.name)} - ${encodeURIComponent(shoe.price)}">
                        <img src="${shoe.image}" alt="${shoe.name}"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200/4285F4/FFFFFF?text=Shoe+Image'">
                        <span>${shoe.price}</span>
                    </a>
                    <p>${shoe.name}</p>
                </div>
            `;
        });
    }
}

// CLOSE MODAL
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// WhatsApp Quote Button
const quoteBtn = document.querySelector('.btn-whatsapp-quote');
if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
        const capTypeText = document.getElementById('cap-type')?.options[document.getElementById('cap-type').selectedIndex].text || 'Regular Cap';
        const customTypeText = document.getElementById('custom-type')?.options[document.getElementById('custom-type').selectedIndex].text || 'Text Only';
        const price = document.getElementById('estimated-price')?.textContent || '₦15,000';
        
        const message = `Hello Capital Caps! I want a custom cap quote:\n• Cap Type: ${capTypeText}\n• Customization: ${customTypeText}\n• Estimated Price: ${price}\nPlease send exact pricing and timeline.`;
        window.open(`https://wa.me/2347017451749?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Google Drive Image Monitoring
function monitorGoogleDriveImages() {
    console.log("🔍 Monitoring Google Drive images...");
    
    // Check sample image from your link
    const sampleImage = new Image();
    sampleImage.onload = function() {
        console.log("✅ Google Drive image loaded successfully!");
        console.log("✅ Your Google Drive link is working: https://drive.google.com/uc?export=view&id=1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq");
    };
    sampleImage.onerror = function() {
        console.log("❌ Google Drive image failed to load");
        console.log("ℹ️ Make sure your Google Drive sharing settings are correct:");
        console.log("1. Right-click file in Google Drive");
        console.log("2. Click 'Get link'");
        console.log("3. Change to 'Anyone with the link'");
        console.log("4. Use the direct link format: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID");
    };
    sampleImage.src = 'https://drive.google.com/uc?export=view&id=1mKy4NoLx7jDudt_cbMZjhl8EIdEKlhlq';
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM fully loaded!");
    console.log("🌐 Using GOOGLE DRIVE for images");
    
    // Show Google Drive guide
    showDriveUploadGuide();
    
    // Check if modal exists
    if (!modal) {
        console.error("❌ Modal not found! Make sure modal HTML is in index.html");
    } else {
        console.log("✅ Modal found and ready!");
    }
    
    // Load shoes
    loadShoes();
    
    // Monitor Google Drive images
    monitorGoogleDriveImages();
    
    // Welcome message
    console.log("🎉 Capital Caps NG Ready with Google Drive!");
    console.log("📁 All images will be loaded from your Google Drive");
    console.log("👉 Check console for image upload guide");
    console.log("👉 WhatsApp: +2347017451749");
});

// Make guide function available globally
window.showDriveUploadGuide = showDriveUploadGuide;
window.convertToDirectLink = convertToDirectLink;