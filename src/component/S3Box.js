import React from 'react'
import { CheckSquare, MapPin, ChevronDown, Share2 } from 'react-feather';

export default function S3Box() {
  return (
    <div >
      <div className="s3-box" >
        <div className="s3-flex-between s3-align-center">
          <p className="font-title">S3 Sample STREAM Route </p>
          <div className="s3-icon s3-icon-menu s3-icon-menu-more" /> 
        </div>
        <div>
          <p className="font-normal">Sample Route for illustration of STREAM software ("S3") feature </p>
          <p className="font-normal">4 views </p>
        </div>
        <div>
          <p className="font-normal">All changes saved in Drive</p>
        </div>
        <div className="s3-inter-panel" >
          <div className="s3-flex s3-grey-background">
            <div className="s3-icon-link">
              <div className="s3-icon s3-icon-menu s3-icon-menu-layers" /> 
              <p className="font-icon">Add layer</p>
            </div>
            <div className="s3-icon-link">
              <div className="s3-icon s3-icon-menu s3-icon-menu-share" /> 
              <p className="font-icon">Share</p>
            </div>
            <div className="s3-icon-link">
              <div className="s3-icon s3-icon-menu s3-icon-menu-eye" /> 
              <p className="font-icon">Preview</p>
            </div>
          </div>
          <div className="s3-menu-layer">
            <div className="s3-flex-between">
              <div className="s3-icon-link">
                <CheckSquare size={18} />&nbsp;
                <p className="font-icon">Untitled layer</p>
              </div>
              <div className="s3-icon s3-icon-menu s3-icon-menu-more" /> 
            </div>
            <div className="s3-menu-layer-items">
              <div className="s3-icon-link s3-selectable">
                <MapPin size={18} /> &nbsp;
                <p className="font-icon">Start point</p>
              </div>
              <div className="s3-icon-link s3-selectable">
                <Share2 size={18} /> &nbsp;
                <p className="font-icon">Line1</p>
              </div>
              <div className="s3-icon-link s3-selectable">
                <MapPin size={18} /> &nbsp;
                <p className="font-icon">End point</p>
              </div>
            </div>
          </div>
        </div>
        <div className="s3-divider" >
          <div className="s3-icon-link">
            <ChevronDown size={18} /> &nbsp;
            <p className="font-icon">Base map</p>
          </div>
        </div>
      </div>
      <div className="s3-tool-bar" >
        <div className="s3-edit-tool" >
          <div className='s3-tool-button-group'>
            <div className="s3-flex" >
              <div className="s3-tool-button s3-selectable" >
                <div className="s3-icon-tool s3-tool-left" />
              </div>
              <div className="s3-tool-button s3-selectable" >
                <div className="s3-icon-tool s3-tool-right" />
              </div>
            </div>
          </div>
          <div className='s3-tool-button-group'>
            <div className="s3-flex" >
              <div className="s3-tool-button s3-selectable" >
                <div className="s3-icon-tool s3-tool-hand" />
              </div>
              <div className="s3-tool-button s3-selectable" >
                <div className="s3-icon-tool s3-tool-pin" />
              </div>
              <div className="s3-tool-button s3-selectable" >
              <div className="s3-icon-tool s3-tool-line" />
              </div>
            </div>
          </div>
          <div className='s3-tool-button-group'>
            <div className="s3-tool-button s3-selectable" >
              <div className="s3-icon-tool s3-tool-direction" />
            </div>
          </div>
          <div className='s3-tool-button-group'>
            <div className="s3-tool-button s3-selectable" >
              <div className="s3-icon-tool s3-tool-ruler" />
            </div>
          </div>
          <div className='s3-tool-button-group'>
            <div className="s3-tool-stream-button s3-selectable" >
              <div className="s3-icon-tool-stream"> Vault</div>
            </div>
            <div className="s3-tool-stream-button s3-selectable" >
              <div className="s3-icon-tool-stream"> Tunnel</div>
            </div>
            <div className="s3-tool-stream-button s3-selectable" >
              <div className="s3-icon-tool-stream"> Trenc</div>
            </div>
            <div className="s3-tool-stream-button s3-selectable" >
              <div className="s3-icon-tool-stream"> Dash</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
