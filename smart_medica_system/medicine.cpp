#include <iostream>
#include <fstream>
#include <iomanip>
#include <string>
#include <limits>
#include "medicine.h"

using namespace std;

#define RESET   "\033[0m"
#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define YELLOW  "\033[33m"
#define BLUE    "\033[34m"


// Get next ID from file
int getNextID() {
    ifstream fin("medicines.txt");
    int id, lastID = 0;

    Medicine m;
    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock 
               >> m.expDay >> m.expMonth >> m.expYear) {
        lastID = m.id;
    }
    fin.close();
    return lastID + 1;
}


// Add Medicine
void addMedicine() {
    Medicine m;
    m.id = getNextID();

    cout << BLUE << "\n--- Add New Medicine ---\n" << RESET;

    cout << "Enter name: ";
    cin >> m.name;

    cout << "Enter company: ";
    cin >> m.company;

    cout << "Enter price: ";
    cin >> m.price;

    cout << "Enter stock: ";
    cin >> m.stock;

    cout << "Enter Expiry (DD MM YYYY): ";
    cin >> m.expDay >> m.expMonth >> m.expYear;

    ofstream fout("medicines.txt", ios::app);
    fout << m.id << " " << m.name << " " << m.company << " " << m.price << " " 
         << m.stock << " " << m.expDay << " " << m.expMonth << " " << m.expYear << endl;
    fout.close();

    cout << GREEN << "\nMedicine Added Successfully!\n" << RESET;
}


// View All Medicines
void viewMedicines() {
    ifstream fin("medicines.txt");
    Medicine m;

    cout << BLUE << "\n--- All Medicines ---\n" << RESET;

    cout << left << setw(5) << "ID" 
         << setw(15) << "Name" 
         << setw(15) << "Company" 
         << setw(10) << "Price" 
         << setw(10) << "Stock"
         << "Expiry\n";

    cout << "-----------------------------------------------------------\n";

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock 
               >> m.expDay >> m.expMonth >> m.expYear) {

        cout << left << setw(5) << m.id
             << setw(15) << m.name
             << setw(15) << m.company
             << setw(10) << m.price
             << setw(10) << m.stock
             << m.expDay << "-" << m.expMonth << "-" << m.expYear << endl;
    }

    fin.close();
}


// Search Medicine
void searchMedicine() {
    ifstream fin("medicines.txt");
    Medicine m;
    int sid;

    cout << "\nEnter ID to search: ";
    cin >> sid;

    bool found = false;

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
               >> m.expDay >> m.expMonth >> m.expYear) {
        
        if (m.id == sid) {
            found = true;
            cout << GREEN << "\nMedicine Found:\n" << RESET;
            cout << "Name: " << m.name << endl;
            cout << "Company: " << m.company << endl;
            cout << "Price: " << m.price << endl;
            cout << "Stock: " << m.stock << endl;
            cout << "Expiry: " << m.expDay << "-" << m.expMonth << "-" << m.expYear << endl;
        }
    }
    fin.close();

    if (!found)
        cout << RED << "Medicine not found!\n" << RESET;
}


// Update Medicine
void updateMedicine() {
    ifstream fin("medicines.txt");
    ofstream fout("temp.txt");

    Medicine m;
    int uid;
    cout << "\nEnter ID to update: ";
    cin >> uid;

    bool found = false;

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
               >> m.expDay >> m.expMonth >> m.expYear) {
        
        if (m.id == uid) {
            found = true;

            cout << "\nEnter new price: ";
            cin >> m.price;

            cout << "Enter new stock: ";
            cin >> m.stock;

            cout << "Enter new expiry (DD MM YYYY): ";
            cin >> m.expDay >> m.expMonth >> m.expYear;
        }

        fout << m.id << " " << m.name << " " << m.company << " " << m.price << " "
             << m.stock << " " << m.expDay << " " << m.expMonth << " " << m.expYear << endl;
    }

    fin.close();
    fout.close();

    remove("medicines.txt");
    rename("temp.txt", "medicines.txt");

    if (found)
        cout << GREEN << "Updated successfully!\n" << RESET;
    else
        cout << RED << "ID not found!\n" << RESET;
}


// Delete Medicine
void deleteMedicine() {
    ifstream fin("medicines.txt");
    ofstream fout("temp.txt");

    Medicine m;
    int did;

    cout << "\nEnter ID to delete: ";
    cin >> did;

    bool found = false;

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
               >> m.expDay >> m.expMonth >> m.expYear) {

        if (m.id == did) {
            found = true;
            continue;
        }

        fout << m.id << " " << m.name << " " << m.company << " " << m.price << " "
             << m.stock << " " << m.expDay << " " << m.expMonth << " " << m.expYear << endl;
    }

    fin.close();
    fout.close();

    remove("medicines.txt");
    rename("temp.txt", "medicines.txt");

    if (found)
        cout << GREEN << "Deleted Successfully!\n" << RESET;
    else
        cout << RED << "ID Not Found!\n" << RESET;
}



// Low Stock Report
void lowStockReport() {
    ifstream fin("medicines.txt");
    Medicine m;

    cout << YELLOW << "\n--- Low Stock Medicines (Below 10 units) ---\n" << RESET;

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
               >> m.expDay >> m.expMonth >> m.expYear) {

        if (m.stock < 10) {
            cout << RED << m.name << " - Only " << m.stock << " left!\n" << RESET;
        }
    }
    fin.close();
}


// Expiry Alert
void expiryAlert() {
    ifstream fin("medicines.txt");
    Medicine m;

    cout << YELLOW << "\n--- Expiring Soon Medicines ---\n" << RESET;

    while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
               >> m.expDay >> m.expMonth >> m.expYear) {

        if (m.expYear <= 2025) { 
            cout << RED << m.name << " Expiring Soon (" << m.expDay << "-"
                 << m.expMonth << "-" << m.expYear << ")\n" << RESET;
        }
    }
    fin.close();
}

void generateBill() {
    ifstream fin("medicines.txt");
    ofstream fout("temp.txt"); // for stock update
    ofstream billFile("bill_history.txt", ios::app); // save bill

    int custID = 1; // simple counter, optional
    string custName;
    int itemID, qty;
    float total = 0;

    cout << "\n================== Generate Bill ==================\n";
    cout << "Enter Customer Name: ";
    cin.ignore();
    getline(cin, custName);

    bool moreItems = true;

    while (moreItems) {
        cout << "\nEnter Medicine ID to purchase: ";
        cin >> itemID;
        cout << "Enter Quantity: ";
        cin >> qty;

        fin.clear();
        fin.seekg(0);

        Medicine m;
        bool found = false;

        while (fin >> m.id >> m.name >> m.company >> m.price >> m.stock
                   >> m.expDay >> m.expMonth >> m.expYear) {
            if (m.id == itemID) {
                found = true;
                if (qty > m.stock) {
                    cout << "Not enough stock! Available: " << m.stock << endl;
                    qty = m.stock;
                }
                float amount = m.price * qty;
                total += amount;

                // print bill line
                cout << left << setw(5) << m.id
                     << setw(15) << m.name
                     << setw(10) << qty
                     << setw(10) << amount << endl;

                // update stock
                m.stock -= qty;
            }
            fout << m.id << " " << m.name << " " << m.company << " "
                 << m.price << " " << m.stock << " "
                 << m.expDay << " " << m.expMonth << " " << m.expYear << endl;
        }

        if (!found)
            cout << "Medicine ID not found!\n";

        cout << "\nAdd more items? (1-Yes / 0-No): ";
        int choice;
        cin >> choice;
        moreItems = (choice == 1);
    }

    fin.close();
    fout.close();

    remove("medicines.txt");
    rename("temp.txt", "medicines.txt");

    cout << "\n==================== BILL ====================\n";
    cout << "Customer: " << custName << endl;
    cout << "Total Amount: " << total << endl;

    // Save bill in file
    billFile << custName << " | Total: " << total << endl;
    billFile.close();

    cout << "Bill saved successfully!\n";
}