using UnityEngine;
using TMPro;

public class CheckPointSystem : MonoBehaviour
{
    public Transform[] cars;
    public TextMeshPro[] carTexts; // Utilisation de TextMeshPro au lieu de TextMeshProUGUI
    public GameObject nextCheckPoint;

    private int numberOfPlayers;

    void Start()
    {
        // Trouver toutes les voitures avec le tag "Player"
        GameObject[] playerCars = GameObject.FindGameObjectsWithTag("Player");
        numberOfPlayers = playerCars.Length;

        // Initialiser les tableaux
        cars = new Transform[numberOfPlayers];
        carTexts = new TextMeshPro[numberOfPlayers];

        for (int i = 0; i < numberOfPlayers; i++)
        {
            cars[i] = playerCars[i].transform;
            // Récupérer le composant TextMeshPro attaché à la voiture
            carTexts[i] = playerCars[i].GetComponentInChildren<TextMeshPro>();
        }

        nextCheckPoint.SetActive(false);
    }

    void Update()
    {
        float[] distances = new float[numberOfPlayers];

        // Calculer les distances
        for (int i = 0; i < numberOfPlayers; i++)
        {
            distances[i] = Vector3.Distance(transform.position, cars[i].position);
        }

        // Trier les distances
        int[] sortedIndices = new int[numberOfPlayers];
        for (int i = 0; i < numberOfPlayers; i++)
        {
            sortedIndices[i] = i;
        }

        System.Array.Sort(distances, sortedIndices);

        // Mettre à jour les TextMeshPro sur les voitures
        for (int i = 0; i < numberOfPlayers; i++)
        {
            carTexts[sortedIndices[i]].text = (i + 1).ToString();
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            nextCheckPoint.SetActive(true);
            gameObject.SetActive(false);
        }
    }
}