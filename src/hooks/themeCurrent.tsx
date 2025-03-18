type ThemeCurrentProps = {
    sectionCurrent: string;
};

const ThemeCurrent = (sectionCurrent: ThemeCurrentProps) => {
    let sectionColorSecondary;

    console.log(sectionCurrent);
    switch (sectionCurrent) {
        case 'initial':
            sectionColorSecondary = '#F9F9F9';
            break;
        case 'about':
            sectionColorSecondary = '#22D3EE';
            break;
        case 'projects':
            sectionColorSecondary = '#6366F1';
            break;
        case 'contact':
            sectionColorSecondary = '#F9F9F9';
            break;
        case 'Footer':
            sectionColorSecondary = '#CCF381';
            break;
        default:
            return;
    }

    return sectionColorSecondary;
}

export default ThemeCurrent;