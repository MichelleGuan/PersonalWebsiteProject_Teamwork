interface Vocaulary {
    wordName: string;
    pronunciation:string;
    sentence : string[];
    descripion:string;
    type: VocaularyGroup;
    pictures:string[];
}

enum VocaularyGroup{
    CET4,
    CET6,
    TOEFL,
    IELTS,
}


