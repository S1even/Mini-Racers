using UnityEngine;

public class CameraFOVAdjust : MonoBehaviour
{
    public float height = 2.0f; // Hauteur de la caméra
    public float verticalDistance = 5.0f; // Distance verticale de la caméra
    public Vector3 rotationOffset = new Vector3(10, 0, 0); // Rotation de la caméra
    public Transform player; // Référence à l'objet player

    private static int cameraCount = 0; // Compteur de caméras
    public int cameraIndex; // L'indice de la caméra (1 pour Player1, 2 pour Player2, etc.)

    void Start()
    {
        // Attribution dynamique de l'indice de caméra en fonction de l'ordre des caméras
        cameraCount++;
        cameraIndex = cameraCount; // Chaque caméra obtient un indice unique en fonction de son ordre

        // On suppose que les objets des joueurs sont nommés "Player1", "Player2", etc.
        string playerName = "Player" + cameraIndex; // Utilisation de l'indice pour créer le nom du joueur
        player = GameObject.Find(playerName)?.transform;

        if (player == null)
        {
            Debug.LogError("Aucun objet Player trouvé avec le nom: " + playerName);
        }
    }

    void LateUpdate()
    {
        if (player == null) return;

        // Maintenir la position de la caméra mais ajuster sa hauteur et sa distance
        Vector3 targetPosition = player.position + Vector3.up * height - player.forward * verticalDistance;

        // Appliquer la position à la caméra
        transform.position = targetPosition;

        // Ajustement de la rotation de la caméra pour qu'elle suive l'objet Player
        transform.rotation = Quaternion.LookRotation(player.position - transform.position) * Quaternion.Euler(rotationOffset);
    }
}




