export interface Medicationstatement{
    id?: string;//
    status: string;//
    category?: string;//
    medication: string[];
    subject: string;// //Páciens neve, 1 db, stringként
    effective: Date[];
    dosage?: string;// //Plain string, leírja mennyit kell szedni pl. 1 tabletta
}
