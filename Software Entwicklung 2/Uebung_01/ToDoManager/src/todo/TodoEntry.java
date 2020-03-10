package todo;

import java.time.LocalDate;
import app.Status;

public class TodoEntry {
    private final int id;
    private final String description; // see comment underneath
    private final LocalDate dueTo; // maybe dueTo FINAL is not ideal, as in the future, one should edit this
    private Status status;

    public TodoEntry(final int id, final String description, final LocalDate dueTo, final Status status) {
        this.id = id;
        this.description = description;
        this.dueTo = dueTo;
        this.status = status;
    }

    /**
     * Completes a todo entry by setting the status to DONE
     */
    public void complete() {
        this.status = Status.DONE;
    }

    public LocalDate getDueTo() {
        return dueTo;
    }

    public Status getStatus() {
        return status;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "ID: " + id + "\t Date: " + dueTo + "\t Description: " + description + "\t\t\t Status: " + status;
    }

}