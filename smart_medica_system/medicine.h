#ifndef MEDICINE_H
#define MEDICINE_H

#include <string>
using namespace std;

struct Medicine {
    int id;
    string name;
    string company;
    float price;
    int stock;
    int expDay, expMonth, expYear;
};

// Function Prototypes
void addMedicine();
void viewMedicines();
void searchMedicine();
void updateMedicine();
void deleteMedicine();
void lowStockReport();
void expiryAlert();
void generateBill();


#endif
