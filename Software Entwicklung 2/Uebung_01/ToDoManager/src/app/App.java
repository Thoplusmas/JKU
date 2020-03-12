package app;

import java.time.LocalDate;

import inout.In;
import inout.Out;
import manager.TodoManager;
import todo.TodoEntry;

public class App {

    public static void main(String[] args) throws Exception {
        TodoManager manager = new TodoManager();
        In.open("/Users/floriandaniel/Documents/JKU/Software Entwicklung 2/Uebung_01/ToDoManager/todos.txt");
        if (!In.done()) {
            Out.println("Cannot open file todos.txt");
            return;
        }

        int year = In.readInt();
        while (In.done()) {
            int month = In.readInt();
            int day = In.readInt();
            String descr = In.readString();
            System.out.println(LocalDate.of(year, month, day));
            TodoEntry newEntry = new TodoEntry(manager.getNewId(), descr, LocalDate.of(year, month, day), Status.OPEN);
            manager.add(newEntry);

            year = In.readInt();

        }

        In.close();

        Out.println();
        Out.println("All Todos:");
        Out.println("===========");
        TodoEntry[] allEntries;
        allEntries = manager.get(null, null);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }

        Out.println();
        Out.println("Until March 9:");
        Out.println("==============");

        allEntries = manager.get(LocalDate.of(2020, 3, 9), null);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }

        manager.findById(0).complete();
        manager.findById(1).complete();
        manager.findById(2).complete();

        Out.println();
        Out.println("Done:");
        Out.println("===========");
        allEntries = manager.get(null, Status.DONE);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }

        Out.println();
        Out.println("Still open:");
        Out.println("===========");
        allEntries = manager.get(null, Status.OPEN);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }

        Out.println();
        Out.println("Still open until Until March 9:");
        Out.println("===============================");
        allEntries = manager.get(LocalDate.of(2020, 3, 9), Status.OPEN);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }

        manager.removeUnitl(LocalDate.of(2020, 3, 9));

        Out.println();
        Out.println("Remaining items after deletion until 2020-03-09");
        Out.println("===============================");
        allEntries = manager.get(null, null);
        for (int i = 0; i < allEntries.length; i++) {
            System.out.println(allEntries[i]);
        }
    }
}