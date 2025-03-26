export function trimText(initialText: string, maxLenght: number){
    if(initialText.length <= maxLenght){
        return initialText;
    }
    
    const trimmedText = initialText.substring(0, maxLenght).trim();
    const lastSpaceIndex = trimmedText.lastIndexOf(" ");

    if(lastSpaceIndex === -1){
        return trimmedText + "...";
    }
    
    return trimmedText.substring(0, lastSpaceIndex) + "...";
}