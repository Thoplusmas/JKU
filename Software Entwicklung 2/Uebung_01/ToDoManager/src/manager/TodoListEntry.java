package manager;

public class TodoListEntry {
    private TodoListEntry next;
    private TodoListEntry previous;
    private Object data;

    public TodoListEntry getNext() {
        return next;
    }

    public void setNext(TodoListEntry next) {
        this.next = next;
    }

    public TodoListEntry getPrevious() {
        return previous;
    }

    public void setPrevious(TodoListEntry previous) {
        this.previous = previous;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public TodoListEntry(TodoListEntry next, TodoListEntry previous, Object data) {
        this.next = next;
        this.previous = previous;
        this.data = data;
    }

}