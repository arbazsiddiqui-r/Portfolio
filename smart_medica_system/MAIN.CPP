#include <iostream>
#include <iomanip>      // setw() for alignment
#include <string>
#include <cstdlib>      // system("clear") or system("cls")
using namespace std;

// Color Codes for VSCode Terminal
#define RESET   "\033[0m"
#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define YELLOW  "\033[33m"
#define BLUE    "\033[34m"

// Function Prototypes
void addMedicine();
void viewMedicines();
void searchMedicine();
void updateMedicine();
void deleteMedicine();
void generateBill();
void lowStockReport();
void expiryAlert();


// Clear screen based on OS
void clearScreen() {
#ifdef _WIN32
    system("cls");
#else
    system("clear");
#endif
}

// Header UI
void header() {
    cout << BLUE;
    cout << "=============================================\n";
    cout << "           SMART MEDICAL STORE SYSTEM        \n";
    cout << "=============================================\n";
    cout << RESET;
}

// Main Menu Function
void menu() {
    int choice;

    while (true) {
        clearScreen();
        header();

        cout << YELLOW;
        cout << "1. Add Medicine\n";
        cout << "2. View All Medicines\n";
        cout << "3. Search Medicine\n";
        cout << "4. Update Medicine\n";
        cout << "5. Delete Medicine\n";
        cout << "6. Generate Bill\n";
        cout << "7. Low Stock Report\n";
        cout << "8. Expiry Alert\n";
        cout << "9. Exit\n";
        cout << RESET;

        cout << "\nEnter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: addMedicine(); break;
            case 2: viewMedicines(); break;
            case 3: searchMedicine(); break;
            case 4: updateMedicine(); break;
            case 5: deleteMedicine(); break;
            case 6: generateBill(); break;
            case 7: lowStockReport(); break;
            case 8: expiryAlert(); break;
            case 9: 
                cout << GREEN << "Exiting program...\n" << RESET;
                exit(0);
            default:
                cout << RED << "Invalid choice! Try again.\n" << RESET;
        }

        cout << "\nPress Enter to continue...";
        cin.ignore();
        cin.get();
    }
}

int main() {
    menu();
    return 0;
}
