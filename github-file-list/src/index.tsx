import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

interface file {
    id: number,
    name: string,
    type: string,
    updated_at: string,
    latestCommit: {
        message: string
    }
}

const testFiles: Array<file> = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

function FileIcon({ file }: { file: file }) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <td className="file-icon">
            <i className={`a ${icon}`} />
        </td>
    )
}

FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function FileName({ file }: { file: file }) {
    return (
    <>
        <FileIcon file={file} />
        <td className="file-name">
            {file.name}
        </td>
    </>
    );
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const FileListItem = ({ file }: { file: file }) => (
    <tr className="file-list-item" key={file.id}>
        <FileName file={file} />
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

const FileList = ({ files }: { files: Array<file> }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file} />
            ))}
        </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array
};

ReactDOM.render(
    <FileList files={testFiles} />,
    document.querySelector('#root')
);

