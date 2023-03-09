export const handleClickWhatsapp = (type: 'normal' | 'villa' | 'grand_type_36' | 'grand_type_50' | 'park_type_36' | 'park_type_65') => {
    let prefix = "Rudensia+Park";

    switch (type) {
        case 'villa':
            prefix = 'Villa+Rudensia';
            break;
        case 'grand_type_36':
            prefix = 'Grand+Rudensia+Type+36';
            break;
        case 'grand_type_50':
            prefix = 'Grand+Rudensia+Type+50';
            break;
        case 'park_type_36':
            prefix = 'Rudensia+Park+Type+36';
            break;
        case 'park_type_65':
            prefix = 'Rudensia+Park+Type+65';
            break;
        default:
            break;
    };

    window.open(`https://wa.me/6285703435108?text=Halo%2C+saya+ingin+tanya+tentang+${prefix}`);
};