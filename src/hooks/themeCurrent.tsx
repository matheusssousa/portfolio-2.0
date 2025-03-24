const ThemeCurrent = (sectionCurrent: string): string => {
    let sectionColorSecondary = '#F9F9F9';

    switch (sectionCurrent) {
        case 'initial':
            sectionColorSecondary = '#F9F9F9';
            break;
        case 'about':
            sectionColorSecondary = '#22D3EE';
            break;
        case 'projects':
            sectionColorSecondary = '#CCF381';
            break;
        case 'contact':
            sectionColorSecondary = '#FFFFFF';
            break;
        case 'Footer':
            sectionColorSecondary = '#CCF381';
            break;
        default:
            sectionColorSecondary = '#F9F9F9';
            break;
    }

    return sectionColorSecondary;
}

export default ThemeCurrent;