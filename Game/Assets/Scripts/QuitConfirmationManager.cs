using UnityEngine;
using UnityEngine.SceneManagement;

public class QuitConfirmationManager : MonoBehaviour
{
    public GameObject quitConfirmationPanel;

    public void ShowQuitConfirmation()
    {
        quitConfirmationPanel.SetActive(true);
    }

    public void HideQuitConfirmation()
    {
        quitConfirmationPanel.SetActive(false);
    }

    public void QuitGame()
    {
        #if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false;
        #else
        Application.Quit();
        #endif
    }
}
