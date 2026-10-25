#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<string.h>
#include<ctype.h>
#include<dos.h> 


struct student {
		char name[50];
		int roll;
		char course[20];
		char phone[11];
		char address[100];
		char email[50];
	    //	float per;

};
void header(char title[])
{
    clrscr();
    textbackground(BLUE);
    textcolor(WHITE);
    clrscr();

    gotoxy(20,2);
    cprintf("==============================================");
    gotoxy(22,3);
    cprintf("%s", title);
    gotoxy(20,4);
    cprintf("==============================================");

    textbackground(BLACK);
}
void status(char msg[])
{
    textcolor(BLACK);
    textbackground(WHITE);
    gotoxy(1,25);
    cprintf(" %s ", msg);
    textbackground(BLACK);
}
void box(int x1,int y1,int x2,int y2)
{
    int i;
    for(i=x1;i<=x2;i++)
    {
        gotoxy(i,y1); cprintf("-");
        gotoxy(i,y2); cprintf("-");
    }
    for(i=y1;i<=y2;i++)
    {
        gotoxy(x1,i); cprintf("|");
        gotoxy(x2,i); cprintf("|");
    }
}
void tableHeader()
{
    textcolor(YELLOW);
    cprintf("\n%-15s %-6s %-10s %-12s %-12s %-25s\n",
            "NAME","ID","COURSE","PHONE","CITY","EMAIL");
    cprintf("-------------------------------------------------------------------------------\n");
}

void loading(char msg[])
{
    int i;
   // themeAdmin();
    gotoxy(25,12);
    cprintf("%s", msg);

    gotoxy(25,14);
    for(i=0;i<20;i++)
    {
	delay(80);
	cprintf("%c", 219);   // █ block
    }
}

void splash()
{
    int i;
    clrscr();
    textcolor(LIGHTGREEN);

    gotoxy(20,10);
    cprintf("Loading Student Management System");

    for(i=0;i<20;i++)
    {
	delay(100);
	cprintf(".");
    }

    delay(500);
}
void themeAdmin()
{
    textbackground(BLUE);
    textcolor(WHITE);
    clrscr();
}

void themeUser()
{
    textbackground(CYAN);
    textcolor(BLACK);
    clrscr();
}

void themeError()
{
    textbackground(RED);
    textcolor(WHITE);
}

void themeSuccess()
{
    textbackground(GREEN);
    textcolor(BLACK);
}


void main()
{

	int mode;
	clrscr();
	splash();
	header("STUDENT RECORD MANAGEMENT SYSTEM");


	box(15,7,65,18);

	gotoxy(25,9);
	printf("1 : Admin Mode");

	gotoxy(25,11);
	printf("2 : User Mode");

	gotoxy(25,13);
	printf("3 : Exit");

	gotoxy(25,15);
	printf("Enter Your Choice : ");
	scanf("%d",&mode);


	if(mode == 1)
	{
	    if(login())
	{

		adminmenu();
	}
	}
	 else if(mode == 2)
	 {
		usermenu();

	 }
	 else if(mode == 3)
	 {
		exit(0);
	 }
	 else{
		themeError();
		gotoxy(25,12);
		cprintf("Invalid selection..");
		getch();

	 }
	    getch();

}

int login(){
		char user_name[20];
		char password[20];
		char ch;
		int i=0,j=6;
		clrscr();
		printf("\n\t================Admin login===================\n");
		login:
		printf("\n\tUsername	: ");
		scanf("%s",user_name);

		printf("\n\tpassword	: ");
		while(1){
			ch=getch();
			if(ch==13)
			{
			password[i] ='\0';
			break;

			}
			else if(ch == 8)
			{
				if(i > 0)
			{
					i--;
			}
					printf("\b \b");

			}
			else if(i < sizeof(password)-1)
			{
				password[i++] = ch;
				printf("*");

			}

		}
		if(strcmp(user_name,"arbaz")==0)

		{
		if(strcmp(password,"arbaz123")==0)
		{
			themeSuccess();
			gotoxy(25,12);
			cprintf("Student record updated successfully!");
			return 1;
		}

		}
		else{


			themeError();
			gotoxy(25,12);
			cprintf("Wrong user or pasword..");
			getch();


			printf("\n\t\t You Have Only   %d  Attempts  ",--j);
		while(j>0)
		  {
			goto login;

		  }
		}
		 return 0;
}
void addstudent(){
		struct student s;
		FILE *idfile;
		FILE *fp;
		int ID;
		clrscr();

		idfile=fopen("last_id.txt","r");
		if(idfile == NULL)
		{
			ID=1000;
			return;

		}else{
			fscanf(idfile,"%d",&ID);
			fclose(idfile);

		}

		s.roll=++ID;

	//	printf("\n\t Enter  ROLL number: ");
	       //	fflush(stdin);
	      //	scanf("%d",&s.roll);
	     /* while(1)
	      {
		  ch=fgetc(fp);
		  if(ch == '\n')
		  {
			ID++;

		  }
		  else if(ch == EOF)
		  {
			break;


		  }


	      }  */
		idfile=fopen("last_id.txt","w");
		fprintf(idfile,"%d",ID);
		fclose(idfile);


		s.roll=ID;
		printf("\n\t Ragistration id   : %d",s.roll);
		printf("\n\t Enter Name        : ");
		fflush(stdin);
		scanf("%s",s.name);
		printf("\n\t Enter   course    : ");
		fflush(stdin);
		scanf("%s",s.course);


		printf("\n\t Enter phone number (10 digits only): ");
		fflush(stdin);
		scanf("%s",s.phone);

		while(strlen(s.phone)!= 10)
		{

			themeError();
			gotoxy(25,12);
			cprintf("Invalid number tnter again..!");
			getch();

			fflush(stdin);
			scanf("%s",s.phone);

		}
		do{
		printf("\n\t Enter Email Id ");
		scanf("%s",s.email);
			if(strchr(s.email, '@') == NULL)
		{
		themeError();

		gotoxy(25,12);
		cprintf("Wrong email missing @...");
		getch();


		}
		if(strchr(s.email,'.')== NULL)
		{
		themeError();
		gotoxy(25,12);
		cprintf("Wrong email missing .com...");
		getch();


		}
	   } while(strchr(s.email, '@')==NULL || strchr(s.email,'.')==NULL);


		printf("\n\t Enter City 			: ");
		fflush(stdin);
		scanf("%s",s.address);


	       /*	printf("\n\tMarks in percentage : ");
		fflush(stdin);
		scanf("%f",&s.per); */

		fp=fopen("students.txt","a");
		fprintf(fp,"%s  %d  %s  %s  %s %s ",s.name,s.roll,s.course,s.phone,s.address,s.email);
		fclose(fp);
		clrscr();
		printf("\n\t Name 		     : %s",s.name);
		printf("\n\t Ragistration ID 	     : %d",s.roll);
		printf("\n\t Course 		     : %s",s.course);
		printf("\n\t Phone number  	     : %s",s.phone);
		printf("\n\t City  	             : %s",s.address);
		printf("\n\t Email ID		     : %s",s.email);

		themeSuccess();
		gotoxy(25,12);
		cprintf("Student record added successfully!");
		getch();


}
void viewstudent()
{
    struct student s;
    FILE *fp;

    themeAdmin();                      // admin style
    header("STUDENT RECORDS");
    box(2,5,79,23);

    loading("Loading student records...");
    delay(300);

    fp = fopen("students.txt","r");
    if(fp == NULL)
    {
        themeError();
        gotoxy(25,12);
        cprintf("No student record found!");
        getch();
        return;
    }

    gotoxy(3,7);
    tableHeader();

    while(fscanf(fp,"%s %d %s %s %s %s",
          s.name,&s.roll,s.course,s.phone,s.address,s.email)!=EOF)
    {
        printf("%-15s %-6d %-10s %-12s %-12s %-25s\n",
               s.name,s.roll,s.course,s.phone,s.address,s.email);
    }

    fclose(fp);

    status("Press any key to return");
    getch();
}
void searchbyroll()
{
	struct student s;
	FILE *fp;
	int roll,found=0;
	clrscr();
	loading("Searching student...");
	delay(300);

	fp= fopen("students.txt","r");


	if(fp == NULL)
	{
		themeError();
		gotoxy(25,12);
		cprintf("Student record not found!");
		getch();

	}
	printf("\t\t Enter Ragistration number to search	:  ");
	scanf("%d",&roll);

	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	if(s.roll == roll)
	{
		clrscr();
		printf("\n\t\t_______________________Record found_______________________\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  	        	: %s",s.address);
		printf("\n\t Email Id			: %s",s.email);
		//printf("\n\t Percentage : %f",s.per);

		found=1;
		break;
	}

	}
	if(!found) {
		    printf("\n\t Student not found...........");


		   }
	fclose(fp);
	getch();

}
void searchbyname()
{
	struct student s;
	FILE *fp;
	char name[30];
	int found=0;
	clrscr();
	loading("Loading student records...");
	delay(300);

	fp= fopen("students.txt","r");
	if(fp == NULL)
	{
		themeError();
		gotoxy(25,12);
		cprintf("Error file opening !");
		getch();


	}
	printf("\t\t Enter name to search	:  ");
	 fflush(stdin);
	scanf("%s",name);
	clrscr();

	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	if(stricmp(s.name, name) == 0)
	{

		printf("\n\t\t____________Record found____________\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  			: %s",s.address);
		printf("\n\t Email Id 			: %s",s.email);

		found=1;
		break;
	}

	}
	if(!found) {

		   themeError();
		   gotoxy(25,12);
		   cprintf("Student record not found!");
		   getch();


		   }
	fclose(fp);
	getch();

}
void searchbycourse()
{
	struct student s;
	FILE *fp;
	char course[20];
	int found=0;
	clrscr();
	loading("Loading student records...");
	delay(300);

	fp=fopen("students.txt","r");

	if(fp == NULL)
	{

		themeError();
		gotoxy(25,12);
		cprintf("Error file opning!");
		getch();


	}

	printf("\t\t Enter course name to search   :  ");
	fflush(stdin);
	scanf("%s",course);


	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	if(stricmp(s.course, course) == 0)
	{

		printf("\n\t\t___________________Record found_____________________\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  			: %s",s.address);
		printf("\n\t Email Id 			: %s",s.email);
		printf("____________________________________________________");
		found=1;
	      //	break;
	}

	}
	if(!found) {

		    printf("\n\t Student not found...........");


		   }
	fclose(fp);
	getch();

}
void searchbyalpha()
{
	struct student s;
	FILE *fp;
	char ch;
	int found=0;
	clrscr();
	loading("Loading student records...");
	delay(300);


	fp=fopen("students.txt","r");
	if(fp== NULL)
	{
		themeError();
		gotoxy(25,12);
		cprintf("Error file opening!");
		getch();


	}
	printf("\t\t Enter alphabet to search :  ");
	fflush(stdin);
	scanf("%c",&ch);

	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	     //	if(s.name[0] == ch || s.name[0] == (ch+32) || s.name[0] == (ch-32))
	       if(tolower(s.name[0]) == toupper(ch) || toupper(s.name[0]) == toupper(ch))
	{

		printf("\n\t____________Record found____________\n");
		printf("\n\t Name 		: %s",s.name);
		printf("\n\t Ragistration ID 	: %d",s.roll);
		printf("\n\t Course 		: %s",s.course);
		printf("\n\t Phone number  	: %s",s.phone);
		printf("\n\t City  		: %s",s.address);
		printf("\n\t Email	        : %s",s.email);
		printf("____________________________________________________");
		found=1;

	}

	}
	if(!found) {

		    themeError();
			gotoxy(25,12);
			cprintf("Student record not found!");
			getch();

		   }
	fclose(fp);
	getch();

}
void updetestudent()

{
	struct student s;
	FILE *fp,*fptemp;
	int roll1,found=0;
	int ch,temp;
	clrscr();
	fp=fopen("students.txt","r");
	fptemp =fopen("temp.txt","w");
	if(fp == NULL || fptemp == NULL )
	{

		themeError();
		gotoxy(25,12);
		cprintf("Error file opning!");
		getch();


	}

	 printf("\n\t\t Enter Registration ID To Updet Student data : ");
	 scanf("%d",&roll1);
	 loading("Loading student records...");
	 delay(300);

	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	if(roll1 ==s.roll)
	{


		printf("\n\t\t============== Record Found ==================\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  			: %s",s.address);
		printf("\n\t Email Id			: %s",s.email);
		printf("_____________________________________________________");

		printf("\n\t Change Data Here..............\n");
		printf("_______________________________________________________________");
		printf("\n\t Enter New Details You Have a Choice (Enter 1 for change and 2 for skip part) : ");
		printf("\n\t Change Neme (1 or 2):");
		scanf("%d",&ch);
	if(ch == 1)
	{
		printf("\n\t Enetr New Name :");
		scanf("%s",s.name);
	}
		printf("\n\t Change course (1 or 2):");
		scanf("%d",&ch);
	if(ch == 1)
	{
		printf("\n\t Enetr New course :");
		scanf("%s",s.course);
	}
		printf("\n\t Change Number (1 or 2) :  ");
		fflush(stdin);
		scanf("%d",&ch);
	if(ch==1)
	{
		printf("\n\t Enetr New Number (10 digit) :");
		scanf("%s",s.phone);
	while(strlen(s.phone)!=10)

	    {
		printf("\n\t Invalid Phone Number :");
		printf("\n\t Enter Again  :");
		scanf("%s",s.phone);
	    }
	}
		printf("\n\t change City (1 or 2)");
		scanf("%d",&ch);
	 if(ch==1)
	{
		printf("\n\t Enetr New City :");
		fflush(stdin);
		scanf("%s",s.address);
	}
		printf("\n\t Change Email (1 or 2)");
		scanf("%d",&ch);

	if(ch==1)
		{
	do{
			printf("\n\t Enter Email Id ");
			fflush(stdin);
			scanf("%s",s.email);
		if(strchr(s.email, '@') == NULL)
		{
			themeError();
			gotoxy(25,12);
			cprintf("Wrong email missing @!");
			getch();

		}
		if(strchr(s.email,'.')== NULL)
		{
			themeError();
			gotoxy(25,12);
			cprintf("Wrong email missing .!");
			getch();


		}
	} while(strchr(s.email, '@')==NULL || strchr(s.email,'.')==NULL);
	}

			found=1;
	}

		fprintf(fptemp,"%s %d %s %s %s %s ",s.name,s.roll,s.course,s.phone,s.address,s.email);

		printf("\n\t\t============== Updated Data ==================\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  			: %s",s.address);
		printf("\n\t Email Id			: %s",s.email);
		printf("_____________________________________________________");

	}
	 fclose(fp);
	 fclose(fptemp);
	 remove("students.txt");
	 rename("temp.txt","students.txt");
	 if (found)
	 {
		themeSuccess();
		gotoxy(25,12);
		cprintf("Student record updated successfully!");
		getch();


	 }
	 else{

		themeError();
		gotoxy(25,12);
		cprintf("Student record not found!");
		getch();

	 }

	 getch();
}
void deletestudent()
{
	struct student s;
	FILE *fp,*fptemp;
	int roll,found=0;
	clrscr();
	fp=fopen("students.txt","r");
	fptemp =fopen("temp.txt","w");
	textcolor(GREEN);
	if(fp == NULL || fptemp == NULL )
	{
		printf("\n\t\t Error Opning a file.........");
		return;

	}
	 clrscr();
	 printf("\n\t\t Enter Ragistration ID To Delete data : ");
	 scanf("%d",&roll);
	 loading("Loading student records...");
	 delay(300);

	while(fscanf(fp,"%s %d %s %s %s %s",s.name,&s.roll,s.course,s.phone,s.address,s.email)!= EOF)
	{
	if(s.roll == roll)
	{
	    found=1;

		printf("\n\t\t============== Record Found ==================\n");
		printf("\n\t Name 			: %s",s.name);
		printf("\n\t Ragistration ID 		: %d",s.roll);
		printf("\n\t Course 			: %s",s.course);
		printf("\n\t Phone number  		: %s",s.phone);
		printf("\n\t City  			: %s",s.address);
		printf("\n\t Email Id			: %s",s.email);
		printf("_____________________________________________________");


	}
	else{
		fprintf(fptemp,"%s %d %s %s %s %s \n",s.name,s.roll,s.course,s.phone,s.address,s.email);
	}
	}
	fclose(fp);
	fclose(fptemp);

	 remove("students.txt");
	 rename("temp.txt","students.txt");

	 if (found)
	 {
		themeSuccess();
		gotoxy(25,12);
		cprintf("Student record updated successfully!");
		getch();


	 }
	 else{
		themeError();
		gotoxy(25,12);
		cprintf("Student record not found!");
		getch();

	 }
	 getch();
}


int adminmenu()
{

	int choice;
	clrscr();
	loading("Opning admin mode...");
	delay(300);

	do{
	    //	themeAdmin();
		header("ADMIN DASHBOARD");
		box(10,6,70,20);

		gotoxy(25,8);  cprintf("1 : Add Student");
		gotoxy(25,9);  cprintf("2 : View All Students");
		gotoxy(25,10); cprintf("3 : Search By ID");
		gotoxy(25,11); cprintf("4 : Search By Name");
		gotoxy(25,12); cprintf("5 : Search By Course");
		gotoxy(25,13); cprintf("6 : Search By Alphabet");
		gotoxy(25,14); cprintf("7 : Update Student");
		gotoxy(25,15); cprintf("8 : Delete Student");
		gotoxy(25,16); cprintf("9 : Logout");
		gotoxy(25,17); cprintf("0 : Exit");

		gotoxy(25,19);
		printf("Enter Choice : ");
		scanf("%d",&choice);

	    switch(choice)
	    {
			case 1:

				addstudent();
				break;

			case 2:

				viewstudent();
				break;
			case 3:

				searchbyroll();
				break;
			case 4:

				searchbyname();
				break;
			case 5:

				searchbycourse();
				break;
			case 6:

				searchbyalpha();
				break;
			case 7:

				updetestudent();
				break;
			case 8:

				deletestudent();
				break;
			case 9:

				loading(" Loging Out...  ");
				delay(200);
				main();
				break;
			case 0:
				loading(" Exiting.. ");
				delay(200);
				exit(0);


			 default:
				themeError();
				gotoxy(25,12);
				cprintf("Invalid choice!");
				break;


	  }
	  }while(choice != 0);
	  return;

}
int usermenu()
{
	int choice;
	clrscr();
	loading("Opning user penal...");
	delay(300);

	do{
		themeUser();
		header("USER DASHBOARD");
		box(12,6,68,20);

		gotoxy(25,8);  cprintf("1 : View All Students");
		gotoxy(25,9);  cprintf("2 : Search By Registration ID");
		gotoxy(25,10); cprintf("3 : Search By Name");
		gotoxy(25,11); cprintf("4 : Search By Course");
		gotoxy(25,12); cprintf("5 : Search By Alphabet");
		gotoxy(25,13); cprintf("6 : Back To Main Menu");
		gotoxy(25,14); cprintf("7 : Exit");

		gotoxy(25,17);
		printf("Enter Choice : ");
		scanf("%d",&choice);
		switch(choice)

	    {

			case 1:

				viewstudent();
				break;
			case 2:

				searchbyroll();
				break;
			case 3:

				searchbyname();
				break;
			case 4:

				searchbycourse();
				break;
			case 5:

				searchbyalpha();
				break;
			case 6:

				loading(" opening main menu...");
				delay(200);
				main();
				break;
			case 7:
				loading(" Exiting ...");
				delay(200);

				exit(0);

			 default:
			themeError();
			gotoxy(25,12);
			cprintf("Invalid choice!");
			break;
	  }
	  }while(choice != 0);
	  return;

}
