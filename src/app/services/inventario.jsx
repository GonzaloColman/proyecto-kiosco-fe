export { clienteAxios } from './axios'

export const getInventario = async () => {
  try {
    const response = await clienteAxios.get(); // Espera a que se resuelva la promesa
    
  } catch (error) {
    // Manejo del error
    console.error('Error al obtener el inventario:', error);
  }
};