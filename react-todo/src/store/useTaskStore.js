import {create} from 'zustand';
import useMessageStore from './useMessageStore';

const useTaskStore = create((set) => ({
  tasks: [{id: 1,title:'Designing',completed: false},{id: 1,title:'logo',completed: false},{id: 1,title:'call designer',completed: false},{id: 1,title:'designing standup',completed: false},{id: 1,title:'revise'}],
  addTask: (task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
  },
  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks
      .map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      .sort((a,b)=>b.completed-a.completed)
    }));
  },
  fetchTasks: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      set({ tasks: data.slice(0, 5) });
      useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      useMessageStore.getState().setMessage('Error fetching tasks', 'error');
    }
  },
}));

export default useTaskStore;
