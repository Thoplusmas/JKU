package todos.app;

import java.time.LocalDate;

import inout.In;
import inout.Out;

public class TodosMain {

	public static void main(String[] args) {
		
		In.open("todos.txt");
		if (!In.done()) {
			Out.println("Cannot open file todos.txt"); 
			return; 
		}
		
		int year = In.readInt(); 
		while (In.done()) {
			int month = In.readInt(); 
			int day = In.readInt(); 
			String descr = In.readString(); 
			// TODO: Add todo with year, month, and day to manager
			year = In.readInt();
		}
		
		In.close(); 
		
		Out.println();
		Out.println("All Todos:");
		Out.println("===========");
		// TODO: get and print all todos 
		
		Out.println();
		Out.println("Until March 9:");
		Out.println("==============");
		// TODO: get and print todos until march 9
		
		
		// TODO: complete some todos 

		Out.println();
		Out.println("Done:");
		Out.println("===========");
		// TODO get and print todos which are done 
		
		Out.println();
		Out.println("Still open:");
		Out.println("===========");
		// TODO get and print todos which are still done 
		
		Out.println();
		Out.println("Still open until Until March 9:");
		Out.println("===============================");
		// TODO get and print todos which are still open until March 9 
		
	}

}
