using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class MusicVolumeController : MonoBehaviour
{
    public AudioSource musicSource;
    public Slider volumeSlider;
    public TextMeshProUGUI volumePercentageText;

    void Start()
    {
        if (musicSource != null && volumeSlider != null)
        {
            volumeSlider.value = musicSource.volume;
        }

        UpdateVolumePercentage(musicSource.volume);
        volumeSlider.onValueChanged.AddListener(ChangeVolume);
    }

    public void ChangeVolume(float volume)
    {
        if (musicSource != null)
        {
            musicSource.volume = volume;
            UpdateVolumePercentage(volume);
        }
    }

    private void UpdateVolumePercentage(float volume)
    {
        if (volumePercentageText != null)
        {
            int percentage = Mathf.RoundToInt(volume * 100);
            volumePercentageText.text = percentage.ToString() + "%";
        }
    }
}