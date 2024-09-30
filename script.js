document.getElementById('showImageButton').addEventListener('click', function() {
    const fruitSelector = document.getElementById('fruitSelector');
    const fruitImage = document.getElementById('fruitImage');
    
    const selectedFruit = fruitSelector.value;
    let imageUrl = '';

    switch (selectedFruit) {
        case 'cherry':
            imageUrl = 'https://media-we-cdn.oriflame.com/contentImage?externalMediaId=4228ee11-0f2e-4a49-b28b-6b4c56c3e36b&name=cherries&inputFormat=png'; 
            break;
        case 'apple':
            imageUrl = 'https://4.imimg.com/data4/BH/GH/MY-23225626/fresh-apple-500x500.jpg'; 
            break;
        case 'banana':
            imageUrl = 'https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg'; 
            break;
        default:
            imageUrl = '';
    }

    if (imageUrl) {
        fruitImage.src = imageUrl;
        fruitImage.style.display = 'block';
    } else {
        fruitImage.style.display = 'none';
    }
});
