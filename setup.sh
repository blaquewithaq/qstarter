#!/usr/bin/env bash

CURRENT_DIR=$(pwd)
BASHRC="$HOME/.bashrc"
BUN_CREATE_DIR="$(pwd)/templates"

if grep -q "^export BUN_CREATE_DIR=" "$BASHRC"; then
    sed -i.bak "s|^export BUN_CREATE_DIR=.*$|export BUN_CREATE_DIR=\"$BUN_CREATE_DIR\"|" "$BASHRC"
else
    {
        echo ""
        echo "export BUN_CREATE_DIR=\"$BUN_CREATE_DIR\""
        echo ""
    } >> "$BASHRC"
fi

source "$BASHRC"