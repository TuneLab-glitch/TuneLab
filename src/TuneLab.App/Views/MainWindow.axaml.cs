using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Platform.Storage;
using TuneLab.App.ViewModels;

namespace TuneLab.App.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        AddHandler(DragDrop.DropEvent, Drop);
    }

    private async void OpenLog_Click(object? sender, RoutedEventArgs e)
    {
        var files = await StorageProvider.OpenFilePickerAsync(new FilePickerOpenOptions
        {
            Title = "Open Hondata CSV",
            AllowMultiple = false,
            FileTypeFilter = [new FilePickerFileType("CSV log") { Patterns = ["*.csv"] }]
        });
        var path = files.FirstOrDefault()?.TryGetLocalPath();
        if (path is not null && DataContext is MainWindowViewModel vm) vm.LoadLog(path);
    }

    private void Drop(object? sender, DragEventArgs e)
    {
        var path = e.DataTransfer.TryGetFiles()?.FirstOrDefault()?.TryGetLocalPath();
        if (path is not null && Path.GetExtension(path).Equals(".csv", StringComparison.OrdinalIgnoreCase) && DataContext is MainWindowViewModel vm) vm.LoadLog(path);
    }
}
