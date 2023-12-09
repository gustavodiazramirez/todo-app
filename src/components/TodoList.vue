<template>
    <div class="container mt-4" style="background-color: black;"> 
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <input
              v-model="newTask"
              @keyup.enter="addOrUpdateTask"
              type="text"
              class="form-control"
              :placeholder="editIndex !== null ? 'Editar tarea' : 'Agregar nueva tarea'"
            />
            <div class="input-group-append">
              <button @click="addOrUpdateTask" class="btn btn-primary">
                {{ editIndex !== null ? 'Editar' : 'Agregar' }}
              </button>
            </div>
          </div>
  
          <ul class="list-group">
            <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
              <span v-if="editIndex !== index">{{ task }}</span>
              <input
                v-if="editIndex === index"
                v-model="editedTask"
                @keyup.enter="saveEditedTask"
                type="text"
                class="form-control"
              />
              <div>
                <button @click="startEditing(index)" class="btn btn-warning btn-sm" style="color: white;">Editar</button>
                <button @click="removeTask(index)" class="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
        editIndex: null,
        editedTask: '',
      };
    },
    methods: {
      addOrUpdateTask() {
        if (this.editIndex !== null) {
          // Editar tarea existente
          this.tasks[this.editIndex] = this.editedTask.trim();
          this.editIndex = null;
          this.editedTask = '';
        } else {
          // Agregar nueva tarea
          if (this.newTask.trim() !== '') {
            this.tasks.push(this.newTask.trim());
            this.newTask = '';
          }
        }
      },
      startEditing(index) {
        // Iniciar modo de edición
        this.editIndex = index;
        this.editedTask = this.tasks[index];
      },
      saveEditedTask() {
        // Guardar tarea editada
        this.addOrUpdateTask();
      },
      removeTask(index) {
        // Eliminar tarea
        this.tasks.splice(index, 1);
        if (this.editIndex === index) {
          this.editIndex = null;
          this.editedTask = '';
        }
      },
    },
  };
  </script>
  