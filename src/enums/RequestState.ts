// Définit un énumérateur décrivant l'état d'une requête asynchrone
enum RequestState {
  // La requête n'a pas encore été envoyée
  Idle,
  // La requête est en cours de traitement
  Pending,
  // La requête a répondu avec un code de succès
  Success,
  // La requête a répondu avec un code d'erreur
  Failed,
}

export default RequestState;
