import * as React from 'react';
import { Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, TextField, Stack, Label, Text, IconButton } from '@fluentui/react';
import { FolderPicker, IFolder } from '@pnp/spfx-controls-react/lib/FolderPicker';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'QrCodeWebPartStrings';

export interface ISaveToSharePointDialogProps {
  isOpen: boolean;
  onDismiss: () => void;
  onSave: (fileName: string, folder: IFolder) => void;
  context: WebPartContext;
}

export interface ISaveToSharePointDialogState {
  fileName: string;
  selectedFolder: IFolder | undefined;
  showFolderPicker: boolean;
}

export class SaveToSharePointDialog extends React.Component<ISaveToSharePointDialogProps, ISaveToSharePointDialogState> {
  constructor(props: ISaveToSharePointDialogProps) {
    super(props);
    
    this.state = {
      fileName: `qrcode-${Date.now()}.png`,
      selectedFolder: undefined,
      showFolderPicker: false
    };
  }

  private _onFileNameChange = (_event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    this.setState({ fileName: newValue || '' });
  }

  private _onFolderSelect = (folder: IFolder): void => {
    this.setState({ 
      selectedFolder: folder,
      showFolderPicker: false
    });
  }

  private _onSave = (): void => {
    const { fileName, selectedFolder } = this.state;
    if (fileName && selectedFolder) {
      this.props.onSave(fileName, selectedFolder);
    }
  }

  public render(): React.ReactElement<ISaveToSharePointDialogProps> {
    const { isOpen, onDismiss, context } = this.props;
    const { fileName, selectedFolder, showFolderPicker } = this.state;

    return (
      <>
        <Dialog
          hidden={!isOpen}
          onDismiss={onDismiss}
          dialogContentProps={{
            type: DialogType.normal,
            title: strings.SaveDialogTitle
          }}
          modalProps={{
            isBlocking: true
          }}
        >
          <Stack tokens={{ childrenGap: 15 }}>
            <TextField
              label={strings.FileNameLabel}
              value={fileName}
              onChange={this._onFileNameChange}
              required
              placeholder="qrcode.png"
            />

            <Stack>
              <Label required>{strings.SelectFolderLabel}</Label>
              <Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="center">
                <DefaultButton
                  text={selectedFolder ? selectedFolder.Name : strings.SelectFolderLabel}
                  iconProps={{ iconName: 'FabricFolder' }}
                  onClick={() => this.setState({ showFolderPicker: true })}
                />
                {selectedFolder && (
                  <IconButton
                    iconProps={{ iconName: 'Clear' }}
                    title="Clear selection"
                    onClick={() => this.setState({ selectedFolder: undefined })}
                  />
                )}
              </Stack>
              {selectedFolder && (
                <Text variant="small" styles={{ root: { marginTop: 5, color: '#605e5c' } }}>
                  {selectedFolder.ServerRelativeUrl}
                </Text>
              )}
            </Stack>
          </Stack>

          <DialogFooter>
            <PrimaryButton
              text={strings.SaveButton}
              onClick={this._onSave}
              disabled={!fileName || !selectedFolder}
            />
            <DefaultButton
              text={strings.CancelButton}
              onClick={onDismiss}
            />
          </DialogFooter>
        </Dialog>

        {showFolderPicker && (
          <FolderPicker
            context={context}
            label={strings.SelectFolderLabel}
            rootFolder={{
              Name: 'Documents',
              ServerRelativeUrl: context.pageContext.web.serverRelativeUrl + '/Shared Documents'
            }}
            onSelect={this._onFolderSelect}
            canCreateFolders={true}
            required={true}
          />
        )}
      </>
    );
  }
}
