import { TrashIcon, PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function TodoItem({ 
  tarea, 
  toggleCompleted, 
  eliminarTarea, 
  editandoId, 
  textoEditado, 
  setTextoEditado, 
  iniciarEdicion, 
  guardarEdicion, 
  cancelarEdicion 
}) {
  
  const estaEditando = editandoId === tarea.id;
  
  return (
    <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      {estaEditando ? (
        <>
          <input 
            className="flex-1 p-2 border rounded" 
            type="text" 
            value={textoEditado} 
            onChange={(e) => setTextoEditado(e.target.value)} 
            autoFocus
          />
          <div className="flex gap-2">
            <button onClick={() => guardarEdicion(tarea.id)}>
              <CheckIcon className="w-5 h-5 text-green-500" />
            </button>
            <button onClick={cancelarEdicion}>
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </>
      ) : (
        <>
          <span className={tarea.completed ? 'line-through flex-1' : 'text-gray-400 flex-1'}>{tarea.text}</span>
          <div className="flex gap-2">
            <input 
              className="w-4 h-4" 
              type="checkbox" 
              checked={tarea.completed} 
              onChange={() => toggleCompleted(tarea.id)} 
            />
            <button onClick={() => iniciarEdicion(tarea.id, tarea.text)}>
              <PencilIcon className="w-5 h-5 text-blue-500" />
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>
              <TrashIcon className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}