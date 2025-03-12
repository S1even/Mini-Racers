using UnityEngine;

public class SettingsPanelManager : MonoBehaviour
{
    [Header("Settings Panel")]
    public GameObject settingsPanel;

    private bool isPanelOpen = false;

    public void ToggleSettingsPanel()
    {
        isPanelOpen = !isPanelOpen;
        settingsPanel.SetActive(isPanelOpen);
    }

    public void CloseSettingsPanel()
    {
        isPanelOpen = false;
        settingsPanel.SetActive(false);
    }
}
